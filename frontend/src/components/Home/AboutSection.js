import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-area p-relative pt-90 pb-70">
      <div className="container">
        <img
          className="about-shape"
          src="assets/img/shape/education-shape-03.png"
          alt="shape"
        />
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about-img position-relative mb-50">
              <div className="about-main-img">
                <img
                  src="https://nauphache.com/wp-content/uploads/2022/05/z3457664655880_69b923f57343c18101a2a8228e1918be.jpg"
                  alt="about"
                />
              </div>
              <img
                className="about-shape-1"
                src="assets/img/shape/education-shape-01.png"
                alt="about"
              />
              <img
                className="about-shape-2"
                src="assets/img/shape/education-shape-02.png"
                alt="about"
              />
              <img
                className="about-shape-3"
                src="assets/img/shape/education-shape-05.png"
                alt="about"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="about-content mb-50">
              <div className="section-title mb-30">
                <h3>
                  "Pha chế là công việc đầy tính nghệ thuật và tỉ mỉ, nhưng rất
                  dẻ dàng đối với những người yêu thích nó"
                  <br />
                  <span className="down-mark-line-2 pt-15">Nau Pha Che</span>
                </h3>
              </div>
              <div className="student-choose-list">
                <p className="mb-30">
                  Nauphache mang đến giải pháp tổng thể dành cho chủ quán, tư
                  vấn thiết kế thi công cửa hàng, setup quầy bar máy móc thiết
                  bị, đào tạo pha chế, đào tạo quản lí vận hành , hỗ trợ khai
                  trương, cung cấp giải pháp marketing tổng thể .
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i>Đào tạo uy tín{" "}
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Updade sản phẩm theo
                    xu hướng
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Đào tạo tổng thể
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-40 pl-60">
        <img
          className="about-shape"
          src="assets/img/shape/education-shape-03.png"
          alt="shape"
        />
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="about-content mb-50">
              <div className="section-title mb-30">
                <h1>Nguyên Liệu Pha Chế</h1>
                <h3 className="down-mark-line-2 pt-15">
                  Nhập khẩu trực tiếp từ nước ngoài.
                </h3>
              </div>
              <div className="student-choose-list">
                <p className="mb-30">
                  Chúng tôi có hơn 200 sản phẩm nguyên liệu cho mọi công thức
                  pha chế cho 1 cửa hàng trà sữa được nhập khẩu và chọn lọc sản
                  phẩm phù hợp với thị trường Việt Nam nói riêng và Châu Á nói
                  chung. Bạn cần thứ gì hãy gọi cho chúng tôi .
                </p>
              </div>
              <Link href="/course">
                <button
                  className="btn"
                  style={{ backgroundColor: "#597535", color: "white" }}
                >
                  Học Và Bắt Đầu Pha Chế!
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-img position-relative mb-50">
              <div className="about-main-img">
                <img
                  src="https://nauphache.com/wp-content/uploads/2022/05/z3451981932342_33edd4739552ed6413fceda14be212a0.jpg"
                  alt="about"
                />
              </div>
              <img
                className="about-shape-1"
                src="assets/img/shape/education-shape-01.png"
                alt="about"
              />
              <img
                className="about-shape-2"
                src="assets/img/shape/education-shape-02.png"
                alt="about"
              />
              <img
                className="about-shape-3"
                src="assets/img/shape/education-shape-05.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
