import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Pagination from "../Common/Pagination";
import CourseBar from "../Course/CourseBar";
import Link from "next/link";
import axios from "../../api/axios";
import * as ReactBootStrap from "react-bootstrap";

import { useRouter } from "next/router";

const CourseMain = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isActive, setActive] = useState("false");
  let DATA_COURSES_URL = "courses";

  const router = useRouter();
  const { title } = router.query;
  title !== "" ? (DATA_COURSES_URL = `courses?title=${title}`) : "courses";

  async function getDataCourse() {
    const token = localStorage.getItem("token");
    try {
      await axios
        .get(DATA_COURSES_URL, JSON.stringify({}), {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setDataCourses(res.data.data);
          setNumPage(res.data.pagination.pageCount);
        });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleFilter(e) {
    const token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: `https://courses-booking.vercel.app/courses?page=0&pageSize=25&sortType=desc&sortField=updatedAt&catalog=${e}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("chevck", response.data.data);
        setDataCourses(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getDataCourse();
  }, [title]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  function NumToTime(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    if (minutes + "".length < 2) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  }

  function handleGetDetail(id) {
    router.push("/course-details");
    localStorage.setItem("id", id);
  }

  return (
    <main>
      <Breadcrumb breadcrumbTitle="Khóa Học" breadcrumbSubTitle="Khóa Học" />
      <CourseBar />
      {loading ? (
        <section className="course-content-area pb-90">
          <div className="container">
            <div className="row mb-10">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div>
                  <div className="course-sidebar-widget mb-20">
                    <div
                      className={`course-sidebar-info ${
                        isActive ? "danger" : "content-hidden"
                      }`}>
                      <h3 className="drop-btn" onClick={handleToggle}>
                        Danh Mục
                      </h3>
                      <ul>
                        <li>
                          <div className="course-sidebar-list pb-5">
                            <input
                              className="edu-check-box"
                              type="checkbox"
                              id="e-bus"
                              onClick={() => getDataCourse()}
                            />
                            <label className="edu-check-label" htmlFor="e-bus">
                              Tất Cả
                            </label>
                          </div>
                          <div className="course-sidebar-list">
                            <input
                              className="edu-check-box"
                              type="checkbox"
                              id="e-bus"
                              value="Cà Phê"
                              onChange={(e) =>
                                handleFilter(e.target.defaultValue)
                              }
                            />
                            <label className="edu-check-label" htmlFor="e-bus">
                              Cà Phê
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="course-sidebar-list">
                            <input
                              className="edu-check-box"
                              type="checkbox"
                              id="e-dev"
                              value="Trà Sữa"
                              onChange={(e) =>
                                handleFilter(e.target.defaultValue)
                              }
                            />
                            <label className="edu-check-label" htmlFor="e-dev">
                              Trà Sữa
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="row">
                  {dataCourses?.map((item) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={item._id}>
                      <div className="protfolio-course-2-wrapper mb-30">
                        <div className="student-course-img">
                          <Link href="/course">
                            <a>
                              <img
                                src={item.thumbnail}
                                alt="course-img"
                                className="rounded"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="course-cart">
                          <div className="course-info-wrapper">
                            <div className="cart-info-body">
                              <Link href="/course">
                                <>
                                  <a className="category-color category-color-3 mr-10">
                                    {item.catalog}
                                  </a>
                                </>
                              </Link>
                              <Link href="/course-details">
                                <a>
                                  <h3>{item.title}</h3>
                                </a>
                              </Link>
                              <div className="cart-lavel">
                                <h5>
                                  Level : <span>{item.level}</span>
                                </h5>
                              </div>
                              <div className="info-cart-text">
                                <ul>
                                  {item.highlights?.map((hight) => (
                                    <li key={hight}>
                                      <i className="far fa-check"></i>
                                      {hight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="course-action">
                                <button
                                  className="view-details-btn"
                                  onClick={() => handleGetDetail(item._id)}>
                                  <i className="flaticon-like">Chi Tiết</i>
                                </button>
                                <Link href="/course-details">
                                  <a className="c-share-btn">
                                    <i className="flaticon-previous"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-course-2-content">
                          <div className="portfolio-course-wrapper">
                            <div className="portfolio-price">
                              <span>{item.price} đ</span>
                            </div>
                            <div className="portfolio-course-2">
                              <h3>
                                <Link href="/course-details">
                                  <a>{item.title}</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="course-2-footer">
                          <div className="coursee-clock">
                            <i className="flaticon-clock"></i>
                            <span>Phút/Bài Học</span>
                          </div>
                          <div className="course-creadit">
                            <i className="flaticon-menu-1"></i>
                            <span>{item.numberOfLessons} Bài Học</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {dataCourses.length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <Pagination numPage={numPage} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </main>
  );
};

export default CourseMain;
