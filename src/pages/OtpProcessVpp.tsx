import React, { useState } from "react";
import { authentication } from "../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";

const OtpProcessVpp = () => {
  const countryCode = "+27";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [expandForm, setExpandForm] = useState(false);
  const [otp, setOTP] = useState();
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [correct, setCorrect] = useState(false);
  const [someEntry, setSomeEntry] = useState(false);

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
        .then(() => setSomeEntry(true))
        .then(() => setCorrect(true))
        .catch((_error: any) => {
          alert("Incorrect OTP Check the sms you received and retype it in");
        });
    }
  };

  return (
    <>
      <div className="Otp-box">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 80%)",
            padding: "20px",
            gridTemplateRows: "minmax(300px, auto)",
            gridGap: "1rem",
            //justify-items: stretch;
            //align-items: stretch;
          }}
        >
          <div>
            <form onSubmit={requestOTP}>
              <div id="sign-in-button">
                {" "}
                <div className="Otp-header">
                  <h1>SMS Authentication</h1>
                </div>
                <div className="Otp-cellNum">
                  <Form.Group>
                    {/* <label>Mobile {"  "}</label> */}
                    <h3>Enter valid phone number below</h3>
                    <input
                      type="text"
                      placeholder="Enter mobile"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form.Group>
                </div>
                {expandForm === true ? (
                  <div className="Otp-cellNum">
                    <Form.Group>
                      <h3>Enter the OTP below</h3>
                      <input
                        type="number"
                        placeholder="Enter otp"
                        value={otp}
                        onChange={verifyOTP}
                      />
                    </Form.Group>
                  </div>
                ) : null}
                {expandForm === false ? (
                  <div className="Otp-cellBtn">
                    <Button type="submit">Request OTP</Button>
                  </div>
                ) : null}
              </div>

              <div className="Otp-responseMsg" id="recaptcha-container"></div>

              {correct ? navigate("/vppapplication") : null}
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
      </div>
    </>
  );
};

export default OtpProcessVpp;
