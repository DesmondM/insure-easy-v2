import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../dataFile.json";
import Modal from "react-modal";
import $ from "jquery";
import img1 from "../../assets/images/main-slider/main-slider-1-1.jpg";
import img2 from "../../assets/images/backgrounds/call-to-action-bg-1-1.jpg";
import img3 from "../../assets/images/main-slider/main-slider-1-3.jpg";
import img4 from "../../assets/images/shapes/trust-bg-1-1.png";
import img5 from "/services-1-1.png";
import img6 from "/services-1-2.png";
import img7 from "/services-1-3.png";
import img8 from "/logo-light.png";
import img10 from "/logo-dark.png";
import img12 from "/call-to-action-bg-1-1.jpg";
import img13 from "/funfact-bg-1-1.jpg";
import img9 from "/why-choose-1-1.png";
import brand1 from "/brand-1-1.jpg";
import brand2 from "/brand-1-2.jpg";
import brand3 from "/brand-1-3.jpg";
import brand4 from "/brand-1-5.jpg";
import brand5 from "/brand-1-7.jpg";

const Home = () => {
  const [modalOneIsOpen, setOneIsOpen] = useState(false);
  const [openQueryFields, setOpenQueryFields] = useState(false);
  const [userValues, setUserValues] = useState({
    age: "",
    membership: "",
    cover: "",
  });

  const navigate = useNavigate();
  const handlePremiumInput = (e: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    e.preventDefault();
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => {
    setOneIsOpen(true);
  };
  const openFields = () => {
    setOpenQueryFields(true);
  };

  return (
    <>
      <Modal isOpen={modalOneIsOpen}>
        {" "}
        The modal holla
        <form>
          Select age
          <select
            name="age"
            onChange={handlePremiumInput}
            style={{
              zIndex: 99999,
              top: 0,
              display: "block",
              padding: "10px",
              width: "95%",
              margin: "auto",
              backgroundColor: "red",
            }}
          >
            <option value={"18-64"}>{"Select age"}</option>
            <option value={"18-64"}>{"18-64"}</option>
            <option value={"65-74"}>{"65-74"}</option>
            <option value={"75-84"}>{"75-84"}</option>
          </select>
          Select membership
          <select
            name="membership"
            onChange={handlePremiumInput}
            style={{
              display: "block",
              padding: "10px",
              width: "95%",
              margin: "auto",
            }}
          >
            <option value={"Member Only"}>{"Select membership"}</option>
            <option value={"Member Only"}>{"Member Only"}</option>
            <option value={"Member & Children"}>{"Member & Children"}</option>
            <option value={"Family"}>{"Family"}</option>
          </select>
          Select Cover
          <select
            name="cover"
            onChange={handlePremiumInput}
            style={{
              display: "block",
              padding: "10px",
              width: "95%",
              margin: "auto",
            }}
          >
            <option value={"R15 000"}>Select cover</option>
            <option value={"R15 000"}>R15 000</option>
            <option value={"R20 000"}>R20 000</option>
            <option value={"R25 000"}>R25 000</option>
            <option value={"R30 000"}>R30 000</option>
          </select>
        </form>
        <div>
          {data
            .filter(
              (record) =>
                record.membershipCover === `${userValues.membership}` &&
                record.payout === `${userValues.cover}` &&
                record.age === `${userValues.age}`
            )
            .map((filteredRecords) => (
              <p>
                {" "}
                Your premium will be{" "}
                <span
                  style={{
                    display: "block",
                    padding: "10px",
                    width: "95%",
                    margin: "auto",
                    fontSize: "100px",
                  }}
                >
                  {" "}
                  {filteredRecords.premium}
                </span>
                <button
                  type="button"
                  style={{
                    display: "block",
                    margin: "auto",
                  }}
                  //  onClick={() =>
                  /*  (() => setSetter((setter) => setter + 1),  */
                  //  setIsOpen(true)
                >
                  Click to apply
                </button>
              </p>
            ))}
        </div>
      </Modal>

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
                  <img src={img10} width="155" alt="" />
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
                        {" "}
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
                      <a href="tel:+19812310000">079 103 4638</a>
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

        <section className="main-slider">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{
        "slidesPerView": 1,
        "loop": true,
        "effect": "fade",
        "autoplay": {
            "delay": 5000
        },
        "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
        }
    }'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${img1})`,
                  }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>EASY PROCESS OF GETTING INSURANCE</p>
                      <h2>MEDICAL COVER FOR YOUR FAMILY</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${img3})`,
                  }}
                ></div>

                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>SHOW YOUR LOVE AND RESPECT</p>
                      <h2>WE OFFER AFFORDABLE FUNERAL COVER.</h2>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/main-slider/main-slider-1-2.jpg)",
                  }}
                ></div> 

                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <p>EASY PROCESS OF GETTING INSURANCE</p>
                      <h2>MEET YOUR MEDICAL COVER WITH ACCISURE</h2>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <i className="pylon-icon-left-arrow"></i>
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <i className="pylon-icon-right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="feature-two">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="feature-two__box">
                        <i className="pylon-icon-consumer-behavior"></i>
                        <p>Quick Payout Process</p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="feature-two__box">
                        <i className="pylon-icon-point-of-sale"></i>
                        <p>No Joining Fees for Accisure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-7">
                <div className="about-one__content">
                  <div className="block-title text-left">
                    <p>Insure Easy Insurance</p>
                    <h2>Our Insurance Products Gives You Peace of Mind</h2>
                  </div>
                  <p>
                    If you’re looking to review your health cover, Insure Easy
                    have affordable options that may suit your needs and budget.
                    Health Insurances can be confusing and expensive. Insure
                    Easy Health Insurance is committed to making sure we’re the
                    right fit for you. This means you’ll still be speaking to
                    and seeing the same friendly faces when it comes to your
                    health cover.
                  </p>
                  <p>
                    The shock that comes when someone passes away, or is
                    diagnosed with a terminal illness, places great pressure on
                    family and loved ones. Grief and loss are hard enough to
                    cope with, without the financial worries that can come with
                    a death. If you have dependants, Insure Easy Funeral Cover
                    can help ease the financial stress on your loved ones if
                    something were to happen to you.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-5">
                <form
                  action="#"
                  className="about-one__form wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <h3>GET YOUR QUOTE TODAY!</h3>
                  <div className="about-one__form-content">
                    <button className="thm-btn" onClick={openFields}>
                      FUNERAL COVER
                    </button>
                    {openQueryFields ? (
                      <div>
                        <h4>Enter Details to calculate Premiums </h4>
                        <form className="contact-one__form">
                          <div className="row low-gutters">
                            <div className="col-md-12">
                              <div className="form-group">
                                <select
                                  name="age"
                                  onChange={handlePremiumInput}
                                  className="form-control contact-one__form-input"
                                >
                                  <option value={"18-64"}>
                                    {"Select age group"}
                                  </option>
                                  <option value={"18-64"}>{"18-64"}</option>
                                  <option value={"65-74"}>{"65-74"}</option>
                                  <option value={"75-84"}>{"75-84"}</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <select
                                  name="membership"
                                  onChange={handlePremiumInput}
                                  className="form-control contact-one__form-input"
                                >
                                  <option value={"Member Only"}>
                                    {"Select membership"}
                                  </option>
                                  <option value={"Member Only"}>
                                    {"Member Only"}
                                  </option>
                                  <option value={"Member & Children"}>
                                    {"Member & Children"}
                                  </option>
                                  <option value={"Family"}>{"Family"}</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <select
                                  name="cover"
                                  onChange={handlePremiumInput}
                                  className="form-control contact-one__form-input"
                                >
                                  <option value={"R15 000"}>
                                    Select cover
                                  </option>
                                  <option value={"R15 000"}>R15 000</option>
                                  <option value={"R20 000"}>R20 000</option>
                                  <option value={"R25 000"}>R25 000</option>
                                  <option value={"R30 000"}>R30 000</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <button
                                className="thm-btn"
                                type="submit"
                                onClick={() => {
                                  // navigate("/application");
                                  navigate("/otpprocess");
                                }}
                              >
                                Complete Application
                              </button>
                            </div>

                            <div className="form-group">
                              {data
                                .filter(
                                  (record) =>
                                    record.membershipCover ===
                                      `${userValues.membership}` &&
                                    record.payout === `${userValues.cover}` &&
                                    record.age === `${userValues.age}`
                                )
                                .map((filteredRecords) => (
                                  <p>
                                    {" "}
                                    Your premium will be{" "}
                                    <h2
                                      style={{
                                        display: "block",
                                        padding: "10px",
                                        width: "95%",
                                        margin: "auto",
                                        fontSize: "150px",
                                      }}
                                    >
                                      {" "}
                                      {filteredRecords.premium}
                                    </h2>
                                  </p>
                                ))}
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : null}

                    <a href="#" className="thm-btn">
                      HEALTH COVER VALUE PLUS PLAN
                    </a>
                    <a href="#" className="thm-btn">
                      HEALTH COVER VALUE PLUS SENIOR
                    </a>
                    <a href="#" className="thm-btn">
                      ACCISURE
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="service-one">
          <div className="container">
            <div className="block-title text-center">
              <p>What We’re Offering</p>
              <h2>Our Insurance Products</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="service-one__card">
                  <div className="service-one__image">
                    <a onClick={() => navigate("/funeralinsurance")}>
                      <div className="post-thumbnail">
                        <img src={img5} alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="service-one__content">
                    <a onClick={() => navigate("/funeralinsurance")}>
                      <div className="service-icon">
                        <i className="flaticon-car-loan"></i>
                      </div>
                    </a>
                    <h3>
                      <a onClick={() => navigate("/funeralinsurance")}>
                        Funeral Cover
                      </a>
                    </h3>
                    <p>
                      Insure Easy guaranteed acceptance funeral cover provides a
                      quick payout of for any sudden expenses that come up
                      should you pass away. It’s a simple way to look out for
                      yourself and the people you love, giving you total peace
                      of mind for the future.
                    </p>
                    <a
                      onClick={() => navigate("/funeralinsurance")}
                      className="pylon-icon-right-arrow service-one__link"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-one__card">
                  <div className="service-one__image">
                    <a onClick={() => navigate("/healthcare")}>
                      <div className="post-thumbnail">
                        <img src={img6} alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="service-one__content">
                    <a onClick={() => navigate("/healthcare")}>
                      <div className="service-icon">
                        <i className="flaticon-online-money"></i>
                      </div>
                    </a>
                    <h3>
                      <a onClick={() => navigate("/healthcare")}>
                        Healthcare Insurance{" "}
                      </a>
                    </h3>
                    <p>
                      We believe in providing you with health insurance that
                      protects you and supports your wellbeing. We make private
                      health insurance easy to understand! Insure Easy have the
                      insurance cover to give you peace of mind.
                    </p>
                    <a
                      onClick={() => navigate("/healthcare")}
                      className="pylon-icon-right-arrow service-one__link"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-one__card">
                  <div className="service-one__image">
                    <a onClick={() => navigate("/accisure")}>
                      <div className="post-thumbnail">
                        <img src={img7} alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="service-one__content">
                    <a onClick={() => navigate("/accisure")}>
                      <div className="service-icon">
                        <i className="flaticon-online-money"></i>
                      </div>
                    </a>
                    <h3>
                      <a onClick={() => navigate("/accisure")}>
                        Accisure Insurance
                      </a>
                    </h3>
                    <p>
                      Our customised product affords employers peace of mind
                      that their workers, especially those without medical aid,
                      are guaranteed private medical care should they get
                      injured at work or while commuting. There is no joining
                      fee..
                    </p>
                    <a
                      onClick={() => navigate("/accisure")}
                      className="pylon-icon-right-arrow service-one__link"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title text-left">
                  <p>Get to Know</p>
                  <h2>We Can Seve you Better.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="block-text">
                  We’ve broken down and demystified some of the most commonly
                  used terms in insurance to help you understand and get the
                  most out of Insure Easy’s Insurances cover offerings. With
                  confidence, we can say, our products are most suited to your
                  needs and budget, as well as, that our products offer you
                  value for money.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="feature-one__box">
                  <i className="pylon-icon-assets"></i>
                  <p>Professional Industry Expertise</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-one__box">
                  <i className="pylon-icon-verification"></i>
                  <p>Short waiting periods reserved.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-one__box">
                  <i className="pylon-icon-finance"></i>
                  <p>Low out of pocket costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted-company">
          <div
            className="trusted-company__bg"
            style={{
              backgroundImage: `url(${img4})`,
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="trusted-company__content">
                  <div className="block-title text-left">
                    <p>Getting Insured Made Easy</p>
                    <h2>People Trust on Us For Easy Insurance Services</h2>
                  </div>
                  <div className="trusted-company__image">
                    <p>
                      If you’re looking to review your health insurance or
                      funeral cover, Insure Easy have affordable options that
                      may suit your needs and budget.
                    </p>
                  </div>
                  <div className="trusted-company__image">
                    <p>
                      Insure Easy, ensures they are Compensation for
                      Occupational Injuries and Diseases (COID) compliant, and
                      workers are registered. For injury that occurs at work or
                      on the road, we assist with the administration so the
                      injured worker can be admitted to a private hospital.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trusted-company__box-wrap">
                  <div className="trusted-company__box">
                    <span>1</span>
                    <p>Easy to fill online insurance product form. </p>
                  </div>
                  <div className="trusted-company__box">
                    <span>2</span>
                    <p>Submit the forms online.</p>
                  </div>
                  <div className="trusted-company__box">
                    <span>3</span>
                    <p>
                      Enter the sent OTP to confirm the insurance product
                      request.
                    </p>
                  </div>
                  <div className="trusted-company__box">
                    <span>4</span>
                    <p>Get your Insurance Cover right away.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-one">
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
        "loop":true,
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
                "spaceBetween": 30,
                "slidesPerView": 1,
                "slidesPerGroup": 1
            },
            "767": {
                "spaceBetween": 30,
                "slidesPerView": 1,
                "slidesPerGroup": 1
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

        <section className="why-choose">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="why-choose__image">
                  <p>
                    <i className="pylon-icon-investment"></i>26 years of working
                    experience
                  </p>

                  <img src={img9} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="why-choose__content">
                  <div className="block-title text-left">
                    <p>Our Benfits</p>
                    <h2>Why Choose Us?</h2>
                  </div>
                  <p>
                    We’ve broken down and demystified some of the most commonly
                    used terms in insurance to help you understand and get the
                    most out of Insure Easy’s Insurances cover offerings. With
                    confidence, we can say, our products are most suited to your
                    needs and budget, as well as, that our products offer you
                    value for money.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="why-choose__box">
                        <h3>
                          <i className="fa fa-caret-right"></i>Quick Payout
                        </h3>
                        <p>
                          Claims are usually paid within 1 business day of all
                          completed documentation being received, so you can be
                          sure your family has the financial help they need with
                          little fuss.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="why-choose__box">
                        <h3>
                          <i className="fa fa-caret-right"></i>Guaranteed
                          acceptance
                        </h3>
                        <p>
                          If you meet the expected requirements, you’re
                          guaranteed acceptance. No medical screening,
                          complicated paperwork or blood tests required
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="why-choose__box">
                        <h3>
                          <i className="fa fa-caret-right"></i>Easy to get
                        </h3>
                        <p>No health questions, medicals or blood tests.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="why-choose__box">
                        <h3>
                          <i className="fa fa-caret-right"></i>Family acceptance
                        </h3>
                        <p>
                          You can apply for a Single Policy or a Family Policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <div style={{ display: "inline" }}>
                  <img src={brand1} width="100" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand2} width="155" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand3} width="100" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand2} width="100" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand4} width="100" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand2} width="100" alt="" />
                </div>
                <div style={{ display: "inline" }}>
                  <img src={brand5} width="100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="call-to-action"
          style={{
            backgroundImage: `url(${img12})`,
          }}
        >
          <div className="container">
            <div className="left-content">
              <p>
                <span>Simple</span>
                <span>Transparent</span>
                <span>Secure</span>
              </p>
              <h3>Get your Insurance Cover Today!</h3>
            </div>
            <div className="right-content"></div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget footer-widget__about">
                  <a onClick={() => navigate("/")}>
                    <img src={img8} width="155" alt="" />
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
                      <a href="#">
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
                      <a onClick={() => navigate("/faccisure")}>
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
              <img src={img8} width="155" alt="" />
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

      <a
        href="https://web.facebook.com/profile.php?id=100083448311884"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up"></i>
      </a>

      {/* <script src="assets/js/jquery-3.5.1.min.js"></script>
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

      <script src="assets/js/theme.js"></script> */}
    </>
  );
};

export default Home;
