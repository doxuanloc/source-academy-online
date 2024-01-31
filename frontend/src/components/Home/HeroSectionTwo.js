import React from "react";
import Link from "next/link";

const HeroSectionTwo = () => {
  return (
    <div className="hero-area hero-height d-flex align-items-center position-relative">
      <img
        className="hero-shape-5"
        src="assets/img/shape/shape-02.png"
        alt="shape"
      />
      <img
        className="hero-shape-1"
        src="assets/img/shape/shape-03.png"
        alt="shape"
      />
      <img
        className="hero-shape-6"
        src="assets/img/shape/shape-01.png"
        alt="shape"
      />
      <img
        className="hero-shape-7"
        src="assets/img/shape/shape-10.png"
        alt="shape"
      />
      <div className="hero-shap-5 d-none d-xxl-block">
        <div className="hero-card">
          <img src="assets/img/shape/slider-card-1.png" alt="image not found" />
          <img src="assets/img/shape/slider-card-2.png" alt="image not found" />
          <img src="assets/img/shape/slider-card-3.png" alt="image not found" />
          <img src="assets/img/shape/slider-card-4.png" alt="image not found" />
          <span>
            <i className="far fa-plus"></i>
          </span>
        </div>
        <h5>
          Có Hơn <span>21+</span> Học Viên Đã Tham Gia Khóa Học
        </h5>
      </div>
      <div className="container">
        <div className="hero-2-content-wrpapper position-relative">
          <div className="hero-shape-2 d-none d-xl-block">
            <img src="assets/img/shape/shape-09.png" alt="shape" />
          </div>
          <div className="hero-shape-4 d-none d-lg-block">
            <img src="assets/img/shape/shape-10.png" alt="shape" />
          </div>
          <div className="hero-thumb-01 d-none d-xl-block">
            <img
              src="https://nauphache.com/wp-content/uploads/2022/05/z3457445151597_9ea6babce8587d1a51c44ea4183521c2.jpg"
              alt="shape"
              style={{ width: "450px", height: "400px" }}
            />
          </div>
          <div className="hero-thumb-02 d-none d-lg-block">
            <img
              src="https://nauphache.com/wp-content/uploads/2022/05/z3451981932342_33edd4739552ed6413fceda14be212a0.jpg"
              alt="shape"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="slider-content-wrapper">
                <div className="hero-tittle-info text-center mb-45">
                  <h2 className="down-mark-line-2">Học Viện Pha Chế </h2>{" "}
                </div>
                <div className="slider-course-content text-center pl-90">
                  <div className="hero-shape-3 d-none d-xl-block">
                    <img
                      src="assets/img/shape/shape-04.png"
                      alt="image not found"
                    />
                    <h5 className="slider-shap-text">
                      Hàng Đầu <br /> Việt Nam
                    </h5>
                  </div>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Nhanh</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Hiệu quả</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Dễ Dàng Học</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
