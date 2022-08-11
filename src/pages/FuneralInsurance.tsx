import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../images/logo-light.png";
import img2 from "../images/logo-dark.png";
import img4 from "../images/page-header-bg-1-1.jpg";
import img5 from "../images/service-sidebar-1-1.jpeg";

export const FuneralInsurance = () => {
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
                <span>Funeral Cover</span>
              </li>
            </ul>
            <h2>Funeral Cover</h2>
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
                        <a href="#">
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
                      <a
                        href="assets/images/info-kits/Health iAccess Funeral Brochure A4.pdf"
                        target="_blank"
                      >
                        <i className="far fa-file-alt"></i>Product
                        Brochure.pdf&nbsp; (1.5 MB)
                      </a>
                    </div>
                  </div>

                  <div className="service-sidebar__call">
                    <div
                      className="service-sidebar__call-bg"
                      style={{
                        backgroundImage: `url(${img4})`,
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
                    <img
                      src="assets/images/services/service-d-1-b.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3>Funeral Cover</h3>
                  <p>
                    When a loved one passes away, we all want to show our love
                    and respect by being able to afford a dignified funeral.
                    This may be costly, thus it is critical to budget for a
                    funeral. The HealthiAccess Funeral Plans provides financial
                    assistance to pay your funeral expenditures, giving you and
                    your family peace of mind during your time of need.
                  </p>

                  <div className="service-details__loan">
                    <div className="block-title">
                      <h4>Terms and Conditions</h4>
                    </div>
                    <p>
                      It is important to read and understand the terms and
                      conditions and to acknowledge that participation and
                      acceptance by customers shall be on voluntary basis.
                    </p>
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
                            Family Funeral
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
                            Maximum age of principal member of 90 and minimum
                            age of 18. Family Funeral Cover expires on principal
                            member’s death.
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
                            Extended Family
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="collapseOne"
                          data-parent="#accordion"
                        >
                          <p>
                            6 Month Waiting Period for parents and members of
                            the extended family. | Covers to a maximum of 5,7, 9
                            or 13 family members in addition to the main member.
                            | All family members covered must be nominated at
                            outset. | Parents and members of the extended family
                            may only be added at the date of joining the scheme.
                            | Maximum number of parents plus parents-in-law is
                            4. | Only 1 customary wife allowed.
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
                            Claims, Underwriting, Administration.
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            Individual and Family rates are quoted as premium
                            per month by main member age. | *Married family rate
                            includes main member + 1 spouse + up to 6 children |
                            **Single parent family rate includes the main member
                            + up to 6 children | Family Funeral (covers up to 6
                            children).
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
                            Waiting Period.
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            Standard waiting period 6 months | Suicide Exclusion
                            24 months
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
                      <a onClick={() => navigate("/healthcare")}>
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
              <img src={img2} width="155" alt="" />
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
