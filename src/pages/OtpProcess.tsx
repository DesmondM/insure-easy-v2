import React, { useState } from "react";
import { authentication } from "../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const OtpProcess = () => {
  const countryCode = "+27";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [otp, setOTP] = useState();
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [correct, setCorrect] = useState(false);

  const navigate = useNavigate();
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        // size: "invisible",
        callback: (_response: any) => {},
      },
      authentication
    );
  };

  const requestOTP = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("Confirmation result ", confirmationResult);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const verifyOTP = (e: { target: { value: any } }) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result: { user: any }) => {
          const user = result.user;
        })
        .then(() => setCorrect(true))
        .catch((_error: any) => {});
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 80%)",
          padding: "20px",
          gridTemplateRows: "minmax(300px, auto)",
          gridGap: "1rem",
          //justify-items: stretch;
          //align-items: stretch;

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <form onSubmit={requestOTP}>
            <div id="sign-in-button">
              {" "}
              <div>
                <h1>SMS Authentication</h1>
                <Form.Group>
                  <label>Mobile</label>
                  <input
                    style={{ width: "500px", margin: "20px" }}
                    type="text"
                    placeholder="Enter mobile"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </div>
              {expandForm === true ? (
                <div>
                  <Form.Group>
                    <label>OTP</label>
                    <input
                      style={{ width: "500px", margin: "20px" }}
                      type="number"
                      placeholder="Enter otp"
                      value={otp}
                      onChange={verifyOTP}
                    />
                  </Form.Group>
                </div>
              ) : null}
              {expandForm === false ? (
                <Button type="submit" style={{ margin: "20px 0px" }}>
                  Request OTP
                </Button>
              ) : null}
            </div>

            <div
              id="recaptcha-container"
              style={{ margin: "auto", padding: "10px" }}
            ></div>

            {correct ? (
              navigate("/application")
            ) : (
              <div>
                <h1>Incorrect OTP</h1>
                <h2>Check the sms you received and retype it in</h2>
              </div>
            )}
            {/* <Button
              type="submit"
              variant="primary"
              onClick={() => navigate("/application")}
            >
              Send OTP
            </Button> */}
          </form>
        </div>
      </div>

      {/* <div style={{ width: "500px", margin: "auto" }}>
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={requestOTP} style={{ display: "block" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOTP} style={{ display: "block" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOTP(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div> */}
    </div>
  );
};

export default OtpProcess;
