import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="page-wrapper">
          <div className="main-header">
            <div className="topbar">
              <div className="container">
                <div className="topbar__left">
                  <div className="topbar__social">
                    <a
                      href="https://web.facebook.com/profile.php?id=100083448311884"
                      className="fab fa-facebook-square"
                    ></a>
                  </div>
                  <a href="#">Login</a>
                </div>
                <div className="topbar__right">
                  <a href="#">
                    <i className="pylon-icon-email1"></i>info@insureeasy.co.za
                  </a>
                  <a href="#">
                    <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM -
                    5:00 PM
                  </a>
                </div>
              </div>
            </div>
            <div className="main-menu">
              <div className="container">
                <div className="logo-box">
                  <a href="index.html" aria-label="logo image">
                    <img src="assets/images/logo-dark.png" width="155" alt="" />
                  </a>
                  <span className="fa fa-bars mobile-nav__toggler"></span>
                </div>
                <ul className="main-menu__list">
                  <li>
                    <a onClick={() => navigate("/")}>Home</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/about")}>About Us</a>
                  </li>

                  <li className="dropdown">
                    <a onClick={() => navigate("/products")}>Products</a>
                    <ul>
                      <li>
                        <a href="#">Health Care</a>
                      </li>
                      <li>
                        <a href="#">Funeral Cover</a>
                      </li>
                      <li>
                        <a href="#">Accisure</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={() => navigate("/contact")}>Contact Us</a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="main-header__info">
              <div className="main-header__info-phone">
                <i className="pylon-icon-tech-support"></i>
                <div className="main-header__info-phone-content">
                  <span>Call Anytime</span>
                  <h3>
                    <a href="tel:+27 79 103 4638">079 103 4638</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li>
              <span>Products</span>
            </li>
          </ul>
          <h2>Products</h2>
        </div>
      </section>
      <section className="service-page pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="funeral insurance.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-1.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="service-one__content">
                  <a href="funeral insurance.html">
                    <div className="service-icon">
                      <i className="flaticon-car-loan"></i>
                    </div>
                  </a>
                  <h3>
                    <a href="funeral insurance.html">Funeral Cover</a>
                  </h3>
                  <p>
                    Insure Easy guaranteed acceptance funeral cover provides a
                    quick payout of for any sudden expenses that come up should
                    you pass away. It’s a simple way to look out for yourself
                    and the people you love, giving you total peace of mind for
                    the future.
                  </p>
                  <a
                    href="funeral insurance.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="healthcare.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-2.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="service-one__content">
                  <a href="healthcare.html">
                    <div className="service-icon">
                      <i className="flaticon-online-money"></i>
                    </div>
                  </a>
                  <h3>
                    <a href="healthcare.html">Healthcare Insurance </a>
                  </h3>
                  <p>
                    We believe in providing you with health insurance that
                    protects you and supports your wellbeing. We make private
                    health insurance easy to understand! Insure Easy have the
                    insurance cover to give you peace of mind.
                  </p>
                  <a
                    href="healthcare.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="accisure.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-3.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="service-one__content">
                  <a href="accisure.html">
                    <div className="service-icon">
                      <i className="flaticon-online-money"></i>
                    </div>
                  </a>
                  <h3>
                    <a href="accisure.html">Accisure Insurance</a>
                  </h3>
                  <p>
                    Our customised product affords employers peace of mind that
                    their workers, especially those without medical aid, are
                    guaranteed private medical care should they get injured at
                    work or while commuting. There is no joining fee..
                  </p>
                  <a
                    href="accisure.html"
                    className="pylon-icon-right-arrow service-one__link"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        <footer className="site-footer">
          {" "}
          <footer className="site-footer">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget footer-widget__about">
                    <a href="index.html">
                      <img
                        src="assets/images/logo-light.png"
                        width="155"
                        alt=""
                      />
                    </a>
                    <p>
                      Welcome to Insure Easy we are committed to excellence in
                      insurance products that are innovative with the best for
                      you as an individual or as a business.
                    </p>
                    <div className="footer-widget__about-phone">
                      <i className="pylon-icon-tech-support"></i>
                      <div className="footer-widget__about-phone-content">
                        <span>Call Anytime</span>
                        <h3>
                          <a href="tel:+27 79 103 4638">+27 79 103 4638</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <div className="footer-widget footer-widget__link">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a onClick={() => navigate("/")}>
                          <i className="fa fa-arrow-right"></i>Home
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          <i className="fa fa-arrow-right"></i>About
                        </a>
                      </li>
                      <li>
                        <a href="services.html">
                          <i className="fa fa-arrow-right"></i>Products
                        </a>
                      </li>
                      <li>
                        <a onClick={() => navigate("/contact")}>
                          <i className="fa fa-arrow-right"></i>Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="footer-widget footer-widget__link">
                    <h3 className="footer-widget__title">Downloads</h3>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="funeral insurance.html">
                          <i className="fa fa-arrow-right"></i>Funeral Cover
                        </a>
                      </li>
                      <li>
                        <a href="healthcare.html">
                          <i className="fa fa-arrow-right"></i>Healthcare
                        </a>
                      </li>
                      <li>
                        <a href="accisure.html">
                          <i className="fa fa-arrow-right"></i>Accisure
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-widget footer-widget__contact">
                    <h3>Contact</h3>
                    <ul className="list-unstyled footer-widget__contact-list">
                      <li>
                        <a href="mailto:info@insureeasy.co.za">
                          <i className="pylon-icon-email1"></i>
                          info@insureeasy.co.za
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM
                          - 5:00 PM
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="pylon-icon-pin1"></i>138 Bellares Drive,
                          Northriding. 2152
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="bottom-footer">
            <div className="container">
              <p>© InsureEasy by 13arts</p>
              <div className="bottom-footer__social">
                <a
                  href="https://web.facebook.com/profile.php?id=100083448311884"
                  className="fab fa-facebook-f"
                ></a>
              </div>
            </div>
          </div>
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"></span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/logo-light.png" width="155" alt="" />
              </a>
            </div>

            <div className="mobile-nav__container"></div>

            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="pylon-icon-email1"></i>
                <a href="mailto:info@insureeasy.co.za">info@insureeasy.co.za</a>
              </li>
              <li>
                <i className="pylon-icon-telephone"></i>
                <a href="tel:+27 79 103 4638">+27 79 103 4638</a>
              </li>
            </ul>
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a
                  href="https://web.facebook.com/profile.php?id=100083448311884"
                  className="fab fa-facebook-f"
                ></a>
              </div>
            </div>
          </div>
        </footer>
        <a
          href="https://web.facebook.com/profile.php?id=100083448311884"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </a>
        <script src="assets/js/jquery-3.5.1.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/swiper.min.js"></script>
        <script src="assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/bootstrap-select.min.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/odometer.min.js"></script>
        <script src="assets/js/jquery.appear.min.js"></script>
        <script src="assets/js/wNumb.min.js"></script>
        <script src="assets/js/nouislider.min.js"></script>
        <script src="assets/js/theme.js"></script>
      </>
    </>
  );
};

export default Products;
