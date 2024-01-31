import { useEffect, useState } from "react";
import axios from "../api/axios";
import Footer from "../components/Layout/Footer/Footer";
import HeaderUser from "../components/Layout/Header/HeaderUser/HeaderUser";
import { toast } from "react-toastify";
import FormData from "form-data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Profile() {
  const GET_PROFILE_URL = "auth/profile";
  const [profileUser, setProFileUser] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [fullName, setFullName] = useState();
  const [birthDay, setBirthDay] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [address, setAddress] = useState();
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [imgUser, setImgUser] = useState();

  const [showChangePass, setShowChangePass] = useState(false);

  const [passwordUser, setPasswordUser] = useState();
  const [newPasswordUser, setNewPasswordUser] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const router = useRouter();
  async function getProfileUser() {
    const token = localStorage.getItem("token");
    setLoadingPage(true);
    if (token) {
      await axios
        .get(GET_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProFileUser(res.data.data);
          setFullName(res.data.data.fullName);
          setBirthDay(res.data.data.birthDay);
          setAddress(res.data.data.address);
          setAvatarUrl(res.data.data.avatarUrl);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.data?.message === "Unauthorized") {
            localStorage.removeItem("token");
          }
        });
    }
    setLoadingPage(false);
  }

  useEffect(() => {
    getProfileUser();
  }, []);

  async function onChangeImgProfile(e) {
    var data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("name", "ahihi");

    var config = {
      method: "post",
      url: "https://courses-booking.vercel.app/files/upload",
      headers: {
        ...data,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function handleChangePassword() {
    const token = localStorage.getItem("token");
    var data = JSON.stringify({
      currentPassword: passwordUser,
      password: newPasswordUser,
      confirmPassword: confirmPassword,
    });

    var config = {
      method: "put",
      url: "https://courses-booking.vercel.app/auth/change-password",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        toast.success(response.data.message);
        localStorage.removeItem("token");
        localStorage.setItem(response.data.accessToken, "token");
        router.push("/");
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
    // setShowChangePass(false);
  }

  async function handleChangeInfo() {
    const token = localStorage.getItem("token");
    setLoadingBtn(true);
    await axios
      .put(
        GET_PROFILE_URL,
        {
          phoneNumber: phoneNumber,
          fullName: fullName,
          birthDay: birthDay,
          avatarUrl: avatarUrl,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProFileUser(res.data.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        // toast.error(err.response.data.message[0]);
        console.log(err);
      });
    setLoadingBtn(false);
  }

  return (
    <>
      <main>
        <Head>
          <title>Hồ Sơ Của Tôi</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="icon"
            href="https://nauphache.com/wp-content/uploads/2022/05/nau-pha-che-09-1024x721.png"
          />
        </Head>
        <HeaderUser />
        {loadingPage ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Hình Của Bạn</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src={
                        avatarUrl ||
                        "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                      }
                      alt="Avatar"
                    />
                    <form>
                      <div className="form-group">
                        <input
                          type="file"
                          className="form-control-file"
                          accept=".png, .jpg"
                          onChange={onChangeImgProfile}
                        />
                      </div>
                    </form>
                    <div className="small font-italic text-muted mb-4">
                      <div className="small font-italic text-muted mb-4">
                        JPG hoặc PNG Không Lớn Hơn 5 MB
                      </div>
                    </div>

                    <button className="btn btn-primary" type="button">
                      Tải Hình Mới
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div className="card-header">Thông Tin Cá Nhân</div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="small mb-1">Tên Đăng Nhập</label>
                      <input
                        className="form-control"
                        type="text"
                        value={profileUser?.email || ""}
                        disabled
                      />
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1">Tên Hiển Thị</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your organization name"
                          value={fullName || ""}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1">Nơi Sống</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Nhập Nơi Ở"
                          value={address || ""}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1">
                          Số Điện Thoại Liên Hệ
                        </label>
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="Số Điện Thoại Của Bạn"
                          value={phoneNumber || ""}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1">Ngày Sinh</label>
                        <input
                          className="form-control"
                          type="date"
                          value={birthDay || ""}
                          onChange={(e) => setBirthDay(e.target.value)}
                        />
                      </div>
                      {showChangePass && (
                        <>
                          <hr className="hr mt-40" />
                          <div>
                            <div className="mb-3 pt-10">
                              <label className="form-label">Mật Khẩu Cũ</label>
                              <input
                                type="password"
                                className="form-control"
                                onChange={(e) =>
                                  setPasswordUser(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Mật Khẩu Mới</label>
                              <input
                                type="password"
                                className="form-control"
                                onChange={(e) =>
                                  setNewPasswordUser(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Xác Nhận Mật Khẩu Mới
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                            <div className="mb-3 form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">
                                Nhớ Mật Khẩu
                              </label>
                            </div>
                            <button
                              className="btn btn-primary"
                              onClick={handleChangePassword}
                            >
                              Xác Nhận Thay Đổi
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                    {!showChangePass && (
                      <div className="d-flex justify-content-around pt-40 pb-20">
                        {loadingBtn ? (
                          <button
                            className="btn btn-primary"
                            type="button"
                            disabled
                          >
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Đang Thay Đổi...
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleChangeInfo}
                          >
                            Lưu Thay Đổi
                          </button>
                        )}
                        <div>
                          <button
                            className="btn btn-danger flex-end"
                            type="button"
                            onClick={() => setShowChangePass(!showChangePass)}
                          >
                            Đổi Mật Khẩu
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="pb-50"></div>
        <Footer />
      </main>
    </>
  );
}