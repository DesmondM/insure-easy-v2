import React from "react";
import { useNavigate } from "react-router-dom";
import imgHeader from "/page-header-bg-1-1.jpg";

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="preloader">
        <img
          className="preloader__image"
          src="assets/images/loader.png"
          alt=""
        />
      </div> */}
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
                <a onClick={() => navigate("/")} aria-label="logo image">
                  <img src="assets/images/logo-dark.png" width="155" alt="" />
                </a>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
              <ul className="main-menu__list">
                <li>
                  <a onClick={() => navigate("/home")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/about")}>About Us</a>
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
                  <a href="#">Contact Us</a>
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
                <a onClick={() => navigate("/home")}>Home</a>
              </li>
              <li>/</li>
              <li>
                <span>Contact Us</span>
              </li>
            </ul>
            <h2>Contact Us</h2>
          </div>
        </section>
        <section className="contact-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-one__content">
                  <div className="block-title">
                    <p className="small-title">Get in touch with us</p>
                    <h2 className="title-block">Ask for your query</h2>
                  </div>
                  <div className="contact-one__box">
                    <i className="pylon-icon-telephone"></i>
                    <div className="contact-one__box-content">
                      <h4>Call Anytime</h4>
                      <a href="tel:+27 79 103 4638">079 103 4638</a>
                    </div>
                  </div>
                  <div className="contact-one__box">
                    <i className="pylon-icon-email1"></i>
                    <div className="contact-one__box-content">
                      <h4>Write Email</h4>
                      <a href="mailto:info@insureeasy.co.za">
                        info@insureeasy.co.za
                      </a>
                    </div>
                  </div>
                  <div className="contact-one__box">
                    <i className="pylon-icon-pin1"></i>
                    <div className="contact-one__box-content">
                      <h4>Visit Office</h4>
                      <a href="#">138 Bellares Drive, Northriding. 2152</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <form
                  action="contact.php"
                  method="post"
                  className="contact-one__form"
                >
                  <div className="row low-gutters">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control contact-one__form-input"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="form-control contact-one__form-input"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control contact-one__form-input"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control contact-one__form-input"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          className="contact-one__form-input"
                        ></textarea>
                      </div>
                      <button className="thm-btn" type="submit">
                        Send A Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
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
                      <a onClick={() => navigate("/h")}>
                        <i className="fa fa-arrow-right"></i>Home
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/about")}>
                        <i className="fa fa-arrow-right"></i>About
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/products")}>
                        <i className="fa fa-arrow-right"></i>Products
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
    </>
  );
};
