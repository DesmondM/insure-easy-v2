import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../images/logo-light.png";
import img2 from "../images/logo-dark.png";
import img3 from "../images/service-d-1-2.jpg";
import img4 from "../images/page-header-bg-1-1.jpg";
import img5 from "../images/service-sidebar-1-1.jpeg";

const Healthcare = () => {
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
                <a onClick={() => navigate("/")} aria-label="logo image">
                  <img src={img2} width="155" alt="" />
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
              backgroundImage: `url(${img4})`,
            }}
          ></div>

          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>/</li>
              <li>
                <span>Healthcare Insurance</span>
              </li>
            </ul>
            <h2>Healthcare Insurance</h2>
          </div>
        </section>

        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="service-sidebar__category">
                    <ul className="list-unstyled serivces-widget-list">
                      <li className="pyloan-service-list-arrow">
                        <a href="#">
                          Health Insurance
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>

                      <li className="pyloan-service-list-arrow">
                        <a onClick={() => navigate("/funeralinsurance")}>
                          Funeral Cover<i className="fas fa-chevron-right"></i>
                        </a>
                      </li>

                      <li className="pyloan-service-list-arrow">
                        <a href="#">
                          Accisure<i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="document-widget-post">
                    <h3 className="blog-sidebar__box-title">Download</h3>
                    <div className="pylon-links">
                      <a href="#" target="_blank">
                        <i className="far fa-file-alt"></i>Value Plus Hospital
                        Plan.pdf&nbsp; (1 MB)
                      </a>
                    </div>
                  </div>
                  <div className="document-widget-post">
                    <h3 className="blog-sidebar__box-title">Download</h3>
                    <div className="pylon-links">
                      <a href="#" target="_blank">
                        <i className="far fa-file-alt"></i>Hospital Plan
                        Senior.pdf&nbsp; (967kb)
                      </a>
                    </div>
                  </div>

                  <div className="service-sidebar__call">
                    <div
                      className="service-sidebar__call-bg"
                      style={{
                        backgroundImage: `url(${img5})`,
                      }}
                    ></div>
                    <i className="pylon-icon-tech-support"></i>
                    <h3>
                      <a href="tel:+27 79 103 4638<">079 103 4638</a>
                    </h3>
                    <div className="pylon-mail">
                      <a href="mailto:info@insureeasy">info@insureeasy.co.za</a>
                    </div>
                    <p>
                      We are here to help our customer any time. You can call on
                      24/7 To Answer Your Question.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-details__content">
                  <div className="service-details__image">
                    <img src={img3} className="img-fluid" alt="" />
                  </div>
                  <h3>
                    Value Plus Hospital Plan | (Underwritten by Day1 Health)
                  </h3>
                  <p>
                    Life is truly priceless and protecting one’s health is
                    essential. We’re here to help you to lead a healthier,
                    longer, better life – whatever that means to you! Our cover
                    options will give you the confidence you need, so you can
                    spend time focusing on the things that matter most. Private
                    health cover can be confusing and expensive. Looking for
                    cover that's better value? When you’re looking for health
                    insurance, it’s a good idea to take a look at all the
                    angles. You want health cover that complements your
                    lifestyle and helps you get the best care possible
                    compatible with your financial needs. Get Value PluS
                    Hospital Plan.
                  </p>

                  <div className="service-details__loan">
                    <div className="block-title">
                      <h4>BENEFITS</h4>
                    </div>
                  </div>

                  <div className="faq-one faq-one__faq-page py-0 ">
                    <ul
                      id="accordion"
                      className="mb-0 wow fadeInUp list-unstyled"
                      data-wow-duration="1500ms"
                    >
                      <li className="active">
                        <h2 className="para-title active">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-minus"></i>
                            In-Hospital Illness Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="collapse show"
                          role="button"
                          aria-labelledby="collapseTwo"
                          data-parent="#accordion"
                        >
                          <p>
                            Covers up to R10,000 after the first 24 Hours in
                            hospital, up to R10,000 for the second day in
                            hospital, up to R10,000 for the third day in
                            hospital. Thereafter R1,500 per day up to a maximum
                            of 21 days. A 12 month pre-existing conditions
                            exclusion applies. (Excludes Maternity Benefits).
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-plus"></i>
                            Accident/Trauma Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="collapseOne"
                          data-parent="#accordion"
                        >
                          <p>
                            Up to R150,000 per event. A 1 month waiting period
                            applies. (Exclusion: Sports Injuries).
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Death Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>R10,000 for the Principal Member.</p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            24 Hour Emergency Services Ambulance &
                            Pre-Authorisation
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            24 Hour Emergency Services, Medical Assistance and
                            Pre-Authorisation provided by Africa Assist.
                            Guaranteed private hospital admission with
                            preference to all Life Healthcare and Mediclinic
                            hospitals.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h3>
                    Value Plus Plan Hospital - Senior | (Underwritten by Day1
                    Health)
                  </h3>
                  <p>
                    We’re here to help you to lead a healthier, longer, better
                    life – whatever that means to you! Our cover options will
                    give you the confidence you need, so you can spend time
                    focusing on the things that matter most. Private health
                    cover can be confusing and expensive. Looking for cover
                    that's better value? When you’re looking for health
                    insurance, it’s a good idea to take a look at all the
                    angles. You want health cover that complements your
                    lifestyle and helps you get the best care possible
                    compatible with your financial needs. Get Value PluS
                    Hospital Plan.
                  </p>

                  <div className="service-details__loan">
                    <div className="block-title">
                      <h4>BENEFITS</h4>
                    </div>
                  </div>

                  <div className="faq-one faq-one__faq-page py-0 ">
                    <ul
                      id="accordion"
                      className="mb-0 wow fadeInUp list-unstyled"
                      data-wow-duration="1500ms"
                    >
                      <li className="active">
                        <h2 className="para-title active">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-minus"></i>
                            In-Hospital Illness Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="collapse show"
                          role="button"
                          aria-labelledby="collapseTwo"
                          data-parent="#accordion"
                        >
                          <p>
                            Covers up to R10,000 after the first 24 Hours in
                            hospital, up to R10,000 for the second day in
                            hospital, up to R10,000 for the third day in
                            hospital. Thereafter R1,500 per day up to a maximum
                            of 21 days. A 3 month waiting period applies and a
                            12 month pre-existing conditions exclusion applies.
                            (Excludes Maternity Benefits).
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-plus"></i>
                            Accident/Trauma Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="collapseOne"
                          data-parent="#accordion"
                        >
                          <p>
                            Up to R 75,000 per event. Limited to two events per
                            annum A 1 month waiting peiod applies. (Excludes
                            Sport Injuries).
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Death Benefit
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            R 5,000 for the policyholder only. A 3 month waiting
                            period applies
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            24 Hour Emergency Services Ambulance &
                            Pre-Authorisation
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            24 Hour Emergency Services, Medical Assistance and
                            Pre-Authorisation provided by Africa Assist.
                            Immediate cover.Guaranteed private hospital
                            admission with preference to all Life Healthcare and
                            Mediclinic hospitals.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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
                    <img src={img1} width="155" alt="" />
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
                      <a href="#">
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
              <img src={img1} width="155" alt="" />
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

export default Healthcare;
