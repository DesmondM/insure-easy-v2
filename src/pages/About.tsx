import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "/logo-light.png";
import logo2 from "/logo-dark.png";
import imgHeader from "/page-header-bg-1-1.jpg";
import imgAbout1 from "/about-3-1.png";
import imgAbout2 from "/about-3-2.png";
import img13 from "/funfact-bg-1-1.jpg";

import team1 from "/team-1-1.png";
import team2 from "/team-1-2.png";
import team3 from "/team-1-3.png";
import imgVid from "/video-bg-1-1.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-wrapper">
        <header className="main-header">
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
                  <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM - 5:00
                  PM
                </a>
              </div>
            </div>
          </div>
          <nav className="main-menu">
            <div className="container">
              <div className="logo-box">
                <a href="index.html" aria-label="logo image">
                  <img src={logo2} width="155" alt="" />
                </a>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
              <ul className="main-menu__list">
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>

                <li className="dropdown">
                  <a onClick={() => navigate("/products")}>Products</a>
                  <ul>
                    <li>
                      <a onClick={() => navigate("/healthcare")}>Health Care</a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/funeralinsurance")}>
                        Funeral Cover
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/accisure")}>Accisure</a>
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
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>

        <section className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url(${imgHeader})`,
            }}
          ></div>

          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>/</li>
              <li>
                <span>About Us</span>
              </li>
            </ul>
            <h2>About Us</h2>
          </div>
        </section>

        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="about-three__image">
                  <img src={imgAbout1} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-three__image">
                  <img src={imgAbout2} alt="" />
                  <div className="about-three__image-text">
                    Insurance Brokers
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="block-title text-left">
                  <p>Get To Know About Us</p>
                  <h2>InsureEasy Insurance Brokers</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="block-text">
                  Our approach and continued commitment to excellence in
                  healthcare insurance. We offer you an innovative and
                  comprehensive healthcare product with the best for you as an
                  individual or as a business. With VALUE PLUS HOSPITAL PLAN,
                  you can consult the private doctors or hospitals of your
                  choice, without being restricted by a network of providers.
                  Accisure covers all the treatment that you may undergo when
                  injured at workplace or on your way to work. This also
                  includes complete or partial consultations from doctors. When
                  a loved one passes away, we all want to show our love and
                  respect by being able to afford a dignified funeral. We offer
                  affordable funeral cover for your family.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-one testimonials-one__about-page">
          <div className="container">
            <div className="block-title text-center">
              <p>Customers Testimonials</p>
              <h2>Customers Testimonials</h2>
            </div>
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{
        "spaceBetween": 0,
        "slidesPerView": 1,
        "slidesPerGroup": 1,
        "autoplay": {
            "delay": 5000
        },
        "pagination": {
            "el": ".testimonials-one__swiper-pagination",
            "type": "bullets",
            "clickable": true
        },
        "breakpoints": {
            "0": {
                "spaceBetween": 0,
                "slidesPerView": 1,
                "slidesPerGroup": 1
            },
            "375": {
                "spaceBetween": 0,
                "slidesPerView": 1,
                "slidesPerGroup": 1
            },
            "667": {
                "spaceBetween": 0,
                "slidesPerView": 1,
                "slidesPerGroup": 1
            },
            "768": {
                "spaceBetween": 30,
                "slidesPerView": 2,
                "slidesPerGroup": 2
            },
            "991": {
                "spaceBetween": 30,
                "slidesPerView": 2,
                "slidesPerGroup": 2
            },
            "1199": {
                "spaceBetween": 30,
                "slidesPerView": 3,
                "slidesPerGroup": 3
            }
        }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        After an accident, I woke up 3 weeks later in ICU in a
                        private hospital. My bills paid but a year later, a rep
                        from Insure Easy is still checking up on me.
                      </span>
                    </p>
                    <h3>M. Dlamini</h3>
                    <span className="testi_sname">Member</span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        For two months I was in a coma and, because of Insure
                        Easy, I was able to be in a private hospital. Thank you
                        to Insure Easy for all the care.
                      </span>
                    </p>
                    <h3>Insure Easy Member</h3>
                    <span className="testi_sname">Member</span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonials-one__box">
                    <p>
                      <span>
                        When my 8-year old daughter was in an accident, the
                        hospital costs were covered. A rep from Insure Easy even
                        visited her regularly to see how she was doing.
                      </span>
                    </p>
                    <h3>Ms Theoroun</h3>
                    <span className="testi_sname">Member</span>
                  </div>
                </div>
              </div>

              <div className="testimonials-one__swiper-pagination swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section className="video-two">
          <div
            className="video-two__bg"
            style={{
              backgroundImage: `url(${imgVid})`,
            }}
          ></div>
          <div className="container">
            <a
              href="assets/images/VIDEO-2021-10-27-08-51-37.mp4"
              className="video-one__btn video-popup"
            >
              <i className="fa fa-play"></i>
            </a>
            <h3>Private Care that you and your family deserve.</h3>
          </div>
        </section>

        <section className="funfact-one">
          <div
            className="funfact-one__bg"
            style={{
              backgroundImage: `url(${img13})`,
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="funfact-one__box">
                  <h3>
                    <span className="odometer" data-count="99">
                      00
                    </span>
                    %
                  </h3>
                  <p>We Approve Insurances</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="funfact-one__box">
                  <h3>
                    <span className="odometer" data-count="500">
                      01
                    </span>
                  </h3>
                  <p>Private Doctors</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="funfact-one__box">
                  <h3>
                    <span className="odometer" data-count="0">
                      00
                    </span>
                    %
                  </h3>
                  <p>Access Gap</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="funfact-one__box">
                  <h3>
                    <span className="odometer" data-count="56">
                      00
                    </span>{" "}
                    Years
                  </h3>
                  <p>Insurance Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-about-page pb-90 pt-100">
          <div className="container">
            <div className="block-title text-center">
              <p>Professional & Experts</p>
              <h2>Meet the Insurance Agents</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-one__card mb-30">
                  <div className="team-one__image">
                    <img src={team1} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3>Willie Ray</h3>
                    <span>Insurance Agent</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-one__card mb-30">
                  <div className="team-one__image">
                    <img src={team2} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3>Carlos Bailey</h3>
                    <span>Insurance Agent</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-one__card mb-30">
                  <div className="team-one__image">
                    <img src={team3} alt="" />
                  </div>
                  <div className="team-one__content">
                    <h3>Sallie Grant</h3>
                    <span>Insurance Agent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="client-carousel pt-90 pb-90 client-carousel__has-border-top">
          <div className="container">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "375": {
                    "spaceBetween": 30,
                    "slidesPerView": 2
                },
                "575": {
                    "spaceBetween": 30,
                    "slidesPerView": 3
                },
                "767": {
                    "spaceBetween": 50,
                    "slidesPerView": 4
                },
                "991": {
                    "spaceBetween": 50,
                    "slidesPerView": 5
                },
                "1199": {
                    "spaceBetween": 100,
                    "slidesPerView": 5
                }
            }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget footer-widget__about">
                  <a onClick={() => navigate("/")}>
                    <img
                      src="assets/images/logo-light.png"
                      width="155"
                      alt=""
                    />
                  </a>
                  <p>
                    Welcome to Insure Easy we are committed to excellence in
                    insurance products that are innovative with the best for you
                    as an individual or as a business.
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
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>About
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/products")}>
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
                      <a onClick={() => navigate("/funeralinsurance")}>
                        <i className="fa fa-arrow-right"></i>Funeral Cover
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/healthcare")}>
                        <i className="fa fa-arrow-right"></i>Healthcare
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/accisure")}>
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
                        <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM -
                        5:00 PM
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
        </div>
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
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>

        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"></span>
          <div className="logo-box">
            <a onClick={() => navigate("/")} aria-label="logo image">
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
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
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
  );
};

export default About;
