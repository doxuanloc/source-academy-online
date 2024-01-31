import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "../../../api/axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ModalCode = ({ showModalCode, setShowModalCode }) => {
  const [codeCourse, setCodeCourse] = useState("");
  const handleClose = () => setShowModalCode(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const URL_COURSES_ACTIVE = "courses/active";

  const handleCodeCourse = async () => {
    const token = localStorage.getItem("token");
    var data = JSON.stringify({
      code: codeCourse,
    });

    var config = {
      method: "post",
      url: URL_COURSES_ACTIVE,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (res) {
        toast.success(res.data.message);
        setShowModalCode(false);
        setCodeCourse("");
      })
      .catch(function (err) {
        toast.error(err.response.data.message);
      });

    // var data = JSON.stringify({
    //   code: codeCourse,
    // });
    // setLoadingBtn(true);

    // await axios
    //   .post(URL_COURSES_ACTIVE, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     data: data,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     setShowModalCode(false);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //     console.log(err);
    //   });
    // setLoadingBtn(false);
  };

  return (
    <>
      <Modal show={showModalCode} onHide={handleClose}>
        <ToastContainer />
        <Modal.Header closeButton>
          <Modal.Title>Nhập Code Khóa Học Đã Mua</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Dán Code Nhận Trong Email Của Bạn Vào Đây !"
                autoFocus
                onChange={(e) => setCodeCourse(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          {!loadingBtn ? (
            <Button
              variant="danger"
              onClick={handleCodeCourse}
              disabled={codeCourse === ""}
            >
              Nhận Khóa Học
            </Button>
          ) : (
            <button className="btn btn-danger" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Đang Xử Lý ...
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCode;
