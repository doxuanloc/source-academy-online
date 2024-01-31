import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import Link from "next/link";

const CategorySlider = () => {
  return (
    <div className="categories-area grey-2 pt-110 pb-90 position-relative">
      <div className="category-shap-02">
        <img
          src="assets/img/shape/categorey-shap-02.png"
          alt="image not found"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-20">
            <div className="section-title mb-30">
              <h2>
                Top <span className="down-mark-line-2">Danh Mục Khóa Học</span>
              </h2>
            </div>
          </div>
          <div>
            <div className="category-main-wrapper position-relative">
              <div className="category-shap-01">
                <img
                  src="assets/img/shape/categorey-shap-01.png"
                  alt="image not found"
                />
              </div>
              <div>
                <div className="category-slide-wrapper position-relative">
                  <div className="swiper-container category-active">
                    <div className="swiper-wrapper">
                      <Swiper
                        modules={[
                          Navigation,
                          Pagination,
                          Scrollbar,
                          A11y,
                          Autoplay,
                        ]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                          320: {
                            slidesPerView: 1,
                          },
                          480: {
                            slidesPerView: 1,
                          },
                          640: {
                            slidesPerView: 2,
                          },
                          991: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 3,
                          },
                          1400: {
                            slidesPerView: 5,
                          },
                        }}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: true,
                        }}
                        navigation={{
                          clickable: true,
                          nextEl: ".category-button-next",
                          prevEl: ".category-button-prev",
                        }}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log("slide change")}
                      >
                        <SwiperSlide>
                          <Link href="/course">
                            <a>
                              <div className="categories-wrapper text-center mb-30">
                                <div className="categiories-thumb">
                                  <svg
                                    id="a"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="128.228"
                                    height="128.228"
                                    viewBox="0 0 128.228 128.228"
                                  >
                                    <g
                                      id="Group_2255"
                                      data-name="Group 2255"
                                      transform="translate(30.053 80.142)"
                                    >
                                      <path
                                        id="Path_6579"
                                        data-name="Path 6579"
                                        d="M17,88.086a2,2,0,0,1-1.723-3.023L41.325,40.984a2,2,0,1,1,3.449,2.039L18.728,87.1A2,2,0,0,1,17,88.086Z"
                                        transform="translate(-15 -40)"
                                        fill="#2946ed"
                                      />
                                      <path
                                        id="Path_6580"
                                        data-name="Path 6580"
                                        d="M62.052,88.086a2,2,0,0,1-1.727-.984L34.279,43.023a2,2,0,1,1,3.449-2.039L63.775,85.063a2,2,0,0,1-1.723,3.023Z"
                                        transform="translate(4.068 -40)"
                                        fill="#2946ed"
                                      />
                                      <path
                                        id="Path_6581"
                                        data-name="Path 6581"
                                        d="M33,86.082a2,2,0,0,1-2-2V42a2,2,0,0,1,4.007,0V84.078A2,2,0,0,1,33,86.082Z"
                                        transform="translate(1.057 -40)"
                                        fill="#2946ed"
                                      />
                                    </g>
                                    <rect
                                      id="Rectangle_120"
                                      data-name="Rectangle 120"
                                      width="16"
                                      height="12"
                                      rx="1"
                                      transform="translate(56 72.169)"
                                      fill="#376cfb"
                                    />
                                    <rect
                                      id="Rectangle_121"
                                      data-name="Rectangle 121"
                                      width="24"
                                      height="12"
                                      rx="1"
                                      transform="translate(52 64.169)"
                                      fill="#4294ff"
                                    />
                                    <path
                                      id="Path_6582"
                                      data-name="Path 6582"
                                      d="M58.975,9.532l-2-8.014A2,2,0,0,0,55.028,0H43.007a2,2,0,0,0-1.943,1.517l-2,8.014A2,2,0,0,0,41,12.021H57.032a2,2,0,0,0,1.943-2.49Z"
                                      transform="translate(39.139)"
                                      fill="#4294ff"
                                    />
                                    <rect
                                      id="Rectangle_122"
                                      data-name="Rectangle 122"
                                      width="96"
                                      height="60"
                                      rx="5"
                                      transform="translate(16 8.169)"
                                      fill="#e6ecff"
                                    />
                                    <path
                                      id="Path_6583"
                                      data-name="Path 6583"
                                      d="M94.153,4H18.018A10.03,10.03,0,0,0,8,14.018V24.036h96.171V14.018A10.03,10.03,0,0,0,94.153,4Z"
                                      transform="translate(8.029 4.014)"
                                      fill="#d0dbf7"
                                    />
                                    <circle
                                      id="Ellipse_37"
                                      data-name="Ellipse 37"
                                      cx="20"
                                      cy="20"
                                      r="20"
                                      transform="translate(58 18.169)"
                                      fill="#4294ff"
                                    />
                                    <circle
                                      id="Ellipse_38"
                                      data-name="Ellipse 38"
                                      cx="14"
                                      cy="14"
                                      r="14"
                                      transform="translate(64 24.169)"
                                      fill="#376cfb"
                                    />
                                    <path
                                      id="Path_6584"
                                      data-name="Path 6584"
                                      d="M54.011,12.007H50A2,2,0,1,1,50,8h4.007a2,2,0,1,1,0,4.007Z"
                                      transform="translate(48.171 8.029)"
                                      fill="#4294ff"
                                    />
                                    <path
                                      id="Path_6585"
                                      data-name="Path 6585"
                                      d="M126.225,66.007H2A2,2,0,1,1,2,62H126.225a2,2,0,0,1,0,4.007Z"
                                      transform="translate(0 62.221)"
                                      fill="#376cfb"
                                    />
                                    <path
                                      id="Path_6586"
                                      data-name="Path 6586"
                                      d="M37,25.018a2,2,0,0,1-2-2A8.023,8.023,0,0,1,43.014,15a2,2,0,0,1,0,4.007,4.011,4.011,0,0,0-4.007,4.007A2,2,0,0,1,37,25.018Z"
                                      transform="translate(35.125 15.053)"
                                      fill="#2946ed"
                                    />
                                  </svg>
                                </div>
                                <div className="categories-content">
                                  <h4>Trà Sữa</h4>
                                  <p>22 Bài Học</p>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Link href="/course">
                            <a>
                              <div className="categories-wrapper text-center mb-30">
                                <div className="categiories-thumb">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="128.221"
                                    height="128.228"
                                    viewBox="0 0 128.221 128.228"
                                  >
                                    <g
                                      id="Digital_Marketing"
                                      data-name="Digital Marketing"
                                      transform="translate(-0.974 -0.971)"
                                    >
                                      <path
                                        id="Path_6587"
                                        data-name="Path 6587"
                                        d="M72.983,47.715a2.591,2.591,0,0,1-1.839-4.429,2.507,2.507,0,0,0,.78-1.811c0-1.421-.5-1.56-4.987-6.045a2.535,2.535,0,0,0-3.649,0,2.591,2.591,0,0,1-4.429-1.839A2.591,2.591,0,0,0,56.268,31H50.306a2.591,2.591,0,0,0-2.591,2.591,2.591,2.591,0,0,1-4.429,1.839,2.535,2.535,0,0,0-1.811-.78c-1.421,0-1.56.5-6.045,4.987a2.535,2.535,0,0,0,0,3.649,2.591,2.591,0,0,1-1.839,4.429A2.591,2.591,0,0,0,31,50.306v5.962a2.591,2.591,0,0,0,2.591,2.591,2.591,2.591,0,0,1,1.839,4.43,2.507,2.507,0,0,0,0,3.649l4.207,4.207a2.535,2.535,0,0,0,3.649,0,2.591,2.591,0,0,1,4.43,1.839,2.591,2.591,0,0,0,2.591,2.591h5.962a2.591,2.591,0,0,0,2.591-2.591,2.591,2.591,0,0,1,2.619-2.591c1.867,0,1.811,1.532,3.622,1.532s1.56-.5,6.045-4.987a2.563,2.563,0,0,0,0-3.649,2.591,2.591,0,0,1,1.839-4.429,2.591,2.591,0,0,0,2.591-2.591V50.306a2.591,2.591,0,0,0-2.591-2.591Zm-24.042-1.56a8.358,8.358,0,1,1-3.689,9.389,8.357,8.357,0,0,1,3.689-9.389Z"
                                        transform="translate(53.622 53.626)"
                                        fill="#374f68"
                                      />
                                      <path
                                        id="Path_6588"
                                        data-name="Path 6588"
                                        d="M67.69,47.715a2.591,2.591,0,0,1-1.839-4.429,2.507,2.507,0,0,0,.78-1.811c0-1.421-.5-1.56-4.987-6.045a2.535,2.535,0,0,0-3.649,0,2.591,2.591,0,0,1-4.429-1.839A2.591,2.591,0,0,0,50.975,31H45.013a2.591,2.591,0,0,0-2.591,2.591,2.591,2.591,0,0,1-4.429,1.839,2.256,2.256,0,0,0-1.421-.724c-10.057,19.055,10.893,40.088,30,30-.167-1.5-1.476-1.476-1.476-3.232a2.591,2.591,0,0,1,2.591-2.619,2.591,2.591,0,0,0,2.591-2.591V50.306a2.591,2.591,0,0,0-2.591-2.591ZM55.126,57.633a8.358,8.358,0,1,1,.149-8.437A8.358,8.358,0,0,1,55.126,57.633Z"
                                        transform="translate(58.914 53.626)"
                                        fill="#425b72"
                                      />
                                      <rect
                                        id="Rectangle_123"
                                        data-name="Rectangle 123"
                                        width="44.573"
                                        height="33.43"
                                        rx="2"
                                        transform="translate(84.622 1.051)"
                                        fill="#db5669"
                                      />
                                      <path
                                        id="Path_6589"
                                        data-name="Path 6589"
                                        d="M70.216,6.572V28.858H39.572A5.572,5.572,0,0,1,34,23.287V1H64.644A5.572,5.572,0,0,1,70.216,6.572Z"
                                        transform="translate(58.979 0.051)"
                                        fill="#f26674"
                                      />
                                      <path
                                        id="Path_6590"
                                        data-name="Path 6590"
                                        d="M45.62,27.948a5.572,5.572,0,0,1-5.572,5.572H6.618a5.572,5.572,0,0,1-5.572-5.572C1.046,4.3.406,3.683,2.941,1.51L23.333,16.8,43.725,1.51C46.261,3.683,45.62,3.934,45.62,27.948Z"
                                        transform="translate(0 0.962)"
                                        fill="#fc6"
                                      />
                                      <path
                                        id="Path_6591"
                                        data-name="Path 6591"
                                        d="M40.216,27.948H9.572A5.572,5.572,0,0,1,4,22.376V6.357L17.929,16.8,38.322,1.51C40.857,3.683,40.216,3.934,40.216,27.948Z"
                                        transform="translate(5.404 0.962)"
                                        fill="#ffde76"
                                      />
                                      <path
                                        id="Path_6592"
                                        data-name="Path 6592"
                                        d="M48.728,13.73,41.04,17.6A2.786,2.786,0,0,1,37,15.095V7.406A2.786,2.786,0,0,1,39.786,4.62c.919,0,.585,0,8.859,4.179a2.786,2.786,0,0,1,.084,4.931Z"
                                        transform="translate(64.337 6.516)"
                                        fill="#dad7e5"
                                      />
                                      <path
                                        id="Path_6593"
                                        data-name="Path 6593"
                                        d="M42.465,2.463,22.072,17.757,1.68,2.463A5.4,5.4,0,0,1,5.357,1.042c35.687,0,34.962-.529,37.107,1.421Z"
                                        transform="translate(1.261 0.009)"
                                        fill="#ffba55"
                                      />
                                      <path
                                        id="Path_6594"
                                        data-name="Path 6594"
                                        d="M36.949,50.556,25.276,62.368a8.358,8.358,0,0,1-11.812,0L5.441,54.484A8.358,8.358,0,0,1,4.131,44.4c.724-1.309.613-1.031,13.121-13.539Z"
                                        transform="translate(3.629 53.376)"
                                        fill="#db5669"
                                      />
                                      <path
                                        id="Path_6595"
                                        data-name="Path 6595"
                                        d="M31.959,46.377,24.465,54.01a8.358,8.358,0,0,1-11.812,0C4.1,45.458,4.129,45.653,3.46,44.4c.724-1.309.613-1.031,13.121-13.539Z"
                                        transform="translate(4.439 53.376)"
                                        fill="#f26674"
                                      />
                                      <path
                                        id="Path_6596"
                                        data-name="Path 6596"
                                        d="M22.673,59.036,11,47.224l7.884-7.884C31.615,52.322,30.974,51.486,31.42,52.322a5.572,5.572,0,0,1-8.748,6.714Z"
                                        transform="translate(17.905 68.52)"
                                        fill="#374f68"
                                      />
                                      <path
                                        id="Path_6597"
                                        data-name="Path 6597"
                                        d="M29.634,52.322a5.572,5.572,0,0,1-8.748,1.142L12,44.438l5.1-5.1C29.829,52.322,29.189,51.486,29.634,52.322Z"
                                        transform="translate(19.691 68.52)"
                                        fill="#425b72"
                                      />
                                      <path
                                        id="Path_6598"
                                        data-name="Path 6598"
                                        d="M65.258,56.812,27.816,74.558l-19.7-19.7C12.1,46.5,8.649,53.8,25.866,17.42Z"
                                        transform="translate(12.762 29.374)"
                                        fill="#dad7e5"
                                      />
                                      <path
                                        id="Path_6599"
                                        data-name="Path 6599"
                                        d="M57.842,51.129,31.4,63.609a8.358,8.358,0,0,1-9.472-1.644L9.09,49.179,24.134,17.42Z"
                                        transform="translate(14.494 29.374)"
                                        fill="#edebf2"
                                      />
                                      <path
                                        id="Path_6600"
                                        data-name="Path 6600"
                                        d="M37.757,31.649a11.143,11.143,0,0,1-3.287,7.856L18.73,23.765a11.143,11.143,0,0,1,19.027,7.884Z"
                                        transform="translate(31.709 34.869)"
                                        fill="#374f68"
                                      />
                                      <path
                                        id="Path_6601"
                                        data-name="Path 6601"
                                        d="M35.541,30.6a5.572,5.572,0,0,1-7.076-.613L19.94,21.46a11.143,11.143,0,0,1,15.6,9.138Z"
                                        transform="translate(33.87 34.889)"
                                        fill="#425b72"
                                      />
                                      <g
                                        id="Group_2256"
                                        data-name="Group 2256"
                                        transform="translate(59.549 34.481)"
                                      >
                                        <path
                                          id="Path_6602"
                                          data-name="Path 6602"
                                          d="M28.988,27.013a2.786,2.786,0,0,1-1.95-4.764l5.906-5.934a2.786,2.786,0,0,1,3.817,3.956C30.465,26.707,30.521,27.013,28.988,27.013Z"
                                          transform="translate(-14.474 -7.958)"
                                          fill="#f26674"
                                        />
                                        <path
                                          id="Path_6603"
                                          data-name="Path 6603"
                                          d="M22,24.143V15.786a2.786,2.786,0,1,1,5.572,0v8.358a2.786,2.786,0,0,1-5.572,0Z"
                                          transform="translate(-22 -13)"
                                          fill="#f26674"
                                        />
                                        <path
                                          id="Path_6604"
                                          data-name="Path 6604"
                                          d="M39.143,27.572H30.786a2.786,2.786,0,0,1,0-5.572h8.358a2.786,2.786,0,1,1,0,5.572Z"
                                          transform="translate(-11.285 3.073)"
                                          fill="#f26674"
                                        />
                                      </g>
                                      <path
                                        id="Path_6605"
                                        data-name="Path 6605"
                                        d="M46.4,14.054A8.358,8.358,0,0,1,38.046,4.61c.919,0,.585,0,8.859,4.179,1.56.724,2.925,3.454-.5,5.265Z"
                                        transform="translate(66.077 6.498)"
                                        fill="#edebf2"
                                      />
                                      <path
                                        id="Path_6606"
                                        data-name="Path 6606"
                                        d="M38.322,2.472,17.929,17.766,4,7.319V1.051C36.371,1.051,36.121.466,38.322,2.472Z"
                                        transform="translate(5.404 0)"
                                        fill="#fc6"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <div className="categories-content">
                                  <h4>Cà Phê</h4>
                                  <p>14 Bài Học</p>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                  <div className="category-nav">
                    <div className="category-button-prev">
                      <i className="far fa-long-arrow-left"></i>
                    </div>
                    <div className="category-button-next">
                      <i className="far fa-long-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
