import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SignIn from "./SignIn";

const MobileMenu = ({
  setMenuOpen,
  menuOpen,
  usernameProfile,
  avtUserProfile,
  logout,
}) => {
  const [signInOpen, setSignInOpen] = useState(false);

  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [pages, setPages] = useState(false);
  const [project, setProject] = useState(false);
  const [blog, setBlog] = useState(false);
  const router = useRouter();
  const [showBtnSignUp, setShowBtnSignUp] = useState(true);
  const [path, setPath] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowBtnSignUp(false);
    }
  }, []);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setProject(false);
      setPages(!pages);
    } else if (menu == "project") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(!project);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
      setProject(false);
    } else if (menu == "instructor") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "zoom") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "events") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "faqs") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    }
  };

  return (
    <div className="fix">
      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-40">
            <div className="row align-items-center">
              <div className="col-9">
                <Link href="/">
                  <a>
                    <img
                      width="80px"
                      src="https://nauphache.com/wp-content/uploads/2022/05/nau-pha-che-09-1024x721.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-3 text-end">
                <button
                  className="side-info-close"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              {!showBtnSignUp && (
                <>
                  <nav id="mobile-menu">
                    <ul>
                      <li className="menu-item-has-children">
                        <span className="pr-5">
                          <h5>Hi {usernameProfile} !</h5>
                        </span>
                        <img
                          className="rounded-circle shadow-lg rounded"
                          width="40px"
                          height="40px"
                          src={
                            avtUserProfile ||
                            "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                          }
                        />
                        <ul className="sub-menu">
                          <li>
                            <Link href="/my-course">
                              <a>Khoá Học Của Tôi</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/profile">
                              <a>Chỉnh Sửa Hồ Sơ</a>
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={logout}
                            >
                              Đăng Xuất
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <hr className="hr" />
                </>
              )}

              <li>
                <Link href="/course">
                  <a>Khóa Học</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Về Chúng Tôi</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Liên Hệ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="offset-widget offset_menu-top mb-20">
            <div className="header-menu-top-icon mb-20">
              <a href="#">
                <i className="fas fa-phone"></i>(034) 841 4895
              </a>
              <a href="www.tiktok.com/@nauphache">
                <i className="fab fa-tiktok"> @nauphache</i>
              </a>
              <i className="fal fa-map-marker-alt"></i>
              <span>6 P. Lê Thánh Tông, Phan Chu Trinh, Hoàn Kiếm, Hà Nội</span>
            </div>
          </div>
          {showBtnSignUp && (
            <div className="offset-widget button mb-20 d-block d-lg-none">
              <span
                className="edu-four-btn"
                onClick={() => {
                  setSignInOpen(!signInOpen);
                }}
              >
                Đăng Kí Ngay
              </span>
            </div>
          )}
        </div>
      </div>

      <SignIn signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </div>
  );
};

export default MobileMenu;
