import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useRouter } from "next/router";
import useSticky from "../../../../hooks/useSticky";

const HeaderGuest = ({ setShowHeaderUser }) => {
  // sticky nav
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signupOpen, setSingUpOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="header-top-icon">
                  <a href="tel:0348414895">
                    <i className="fas fa-phone"></i>0348414895
                  </a>
                  <a href="https://nauphache.com" target="blank">
                    <i className="fal fa-info"></i>nauphache.com
                  </a>
                  <i className="fal fa-map-marker-alt"></i>
                  <span>06 Lê Thánh Tông, Hoàn Kiếm, Hà Nội</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex f-right">
                  <div className="header-social">
                    <a href="https://www.tiktok.com/@nauphache" target="blank">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sticky
            ? "sticky header-area-2 sticky-header"
            : "header-area-2 sticky-header"
        }
      >
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <img
                        width="80px"
                        src="https://nauphache.com/wp-content/uploads/2022/05/nau-pha-che-09-1024x721.png"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <div className="header-main-right  d-flex justify-content-end">
                  <div className="main-menu mr-30 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="">
                          <Link href="/">
                            <a>Trang Chủ</a>
                          </Link>
                        </li>
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
                    </nav>
                  </div>
                  <div className="header-btn pr-5">
                    <span
                      className="edu-four-btn d-none d-lg-block mr-20"
                      onClick={() => {
                        setSignInOpen(!signInOpen);
                      }}
                    >
                      Đăng Nhập
                    </span>
                    <div className="menu-bar ml-20">
                      <a
                        className="side-toggle header-2"
                        href="#!"
                        onClick={() => {
                          setMenuOpen(!menuOpen);
                        }}
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"
        }
      ></div>
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>

      <SignIn
        signInOpen={signInOpen}
        setSignInOpen={setSignInOpen}
        setShowHeaderUser={setShowHeaderUser}
      />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>

      <SignUp signupOpen={signupOpen} setSingUpOpen={setSingUpOpen} />
      <div
        onClick={() => setSingUpOpen(false)}
        className={
          signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </header>
  );
};

export default HeaderGuest;
