import React, { useEffect, useState } from "react";
import data from "../dataFile.json";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Applicationform = () => {
  const navigate = useNavigate();
  const [setter, setSetter] = useState(0);
  const [userValues, setUserValues] = useState({
    age: "",
    membership: "",
    cover: "",
  });

  const [form, setForm] = useState({
    id_number: "",
    dob: "",
    name: "",
    gender: "",
    marital_status: "",
    surname: "",
    address: "",
    cnumber: "",
    email_ad: "",
    employer: "",
    work_number: "",
    beneficiary_name: "",
    beneficiary_surname: "",
    beneficiary_number: "",
    beneficiary_gender: "",
    relation_to_member: "",
    member_only: "",
    member_family: "",
    member_extended_family: "",
  });

  const [modalIsOpen, setIsOpen] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  /*  const handleSet = () => {
    setSetter((current) => !current);
  }; */
  /* function openModal() {
    setIsOpen(true);
  } */

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userValues);
    }
  }, [formErrors]);

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

  const [count, setCount] = useState(1);
  const handleInput = (e: { target: { name: string; value: string } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e: {
    preventDefault: () => void;
    target: { name: string; value: string };
  }) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /*   function openModal() {
    setIsOpen(true);
  } */

  function closeModal() {
    setIsOpen(false);
  }

  const sendMail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs
      .send(
        "service_l6ovz9h",
        "template_qnsuuat",
        //formData.current,
        form,
        "Uef210SDrpG6qGu_F"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          closeModal();
          navigate("/");

          setForm({
            id_number: "",
            dob: "",
            name: "",
            gender: "",
            marital_status: "",
            surname: "",
            address: "",
            cnumber: "",
            email_ad: "",
            employer: "",
            work_number: "",
            beneficiary_name: "",
            beneficiary_surname: "",
            beneficiary_number: "",
            beneficiary_gender: "",
            relation_to_member: "",
            member_only: "",
            member_family: "",
            member_extended_family: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //   const validate = (values) => {
  //     const errors = {};
  //     if (!values.id_number) {
  //       errors.id_number = "Name is required";
  //     }
  //     if (!values.dob) {
  //       errors.dob = "Date of birth required";
  //     }
  //     return errors;
  //   };

  return (
    <>
      <div>
        <div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              //onAfterOpen={afterOpenModal}
              // onRequestClose={closeModal}

              contentLabel="Message Sent"
            >
              <h1 style={{ display: "block", margin: "auto" }}>
                Application Form
              </h1>

              <div>
                <form onSubmit={sendMail}>
                  {count === 1 ? (
                    <>
                      <div className="form-group">
                        <h3>PRINCIPAL MEMBER INFORMATION</h3>
                        <label>ID Number</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="id_number"
                          onChange={handleInput}
                          value={form.id_number}
                          required
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Gender</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="gender"
                          onChange={handleInput}
                          value={form.gender}
                          required
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Marital Status</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="marital_status"
                          onChange={handleInput}
                          value={form.marital_status}
                          required
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Name</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="name"
                          required
                          onChange={handleInput}
                          value={form.name}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Surname</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="surname"
                          onChange={handleInput}
                          value={form.surname}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Address</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="address"
                          onChange={handleInput}
                          value={form.address}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Tel/Cell Number</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="cnumber"
                          onChange={handleInput}
                          value={form.cnumber}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label htmlFor="email">Email</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="email"
                          name="email_ad"
                          id="email"
                          onChange={handleInput}
                          value={form.email_ad}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Employer</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="employer"
                          onChange={handleInput}
                          value={form.employer}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Work Number</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="work_number"
                          onChange={handleInput}
                          value={form.work_number}
                        />
                      </div>
                    </>
                  ) : null}

                  {count === 2 ? (
                    <>
                      <h3>BENEFICIARY INFORMATION</h3>
                      <div style={{ display: "block" }}>
                        <label>Beneficiary Name</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="beneficiary_name"
                          onChange={handleInput}
                          value={form.beneficiary_name}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Surname</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="beneficiary_surname"
                          onChange={handleInput}
                          value={form.beneficiary_surname}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Beneficiary Number</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="beneficiary_number"
                          onChange={handleInput}
                          value={form.beneficiary_number}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Gender</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="beneficiary_gender"
                          onChange={handleInput}
                          value={form.beneficiary_gender}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Relation to member</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="relation_to_member"
                          onChange={handleInput}
                          value={form.relation_to_member}
                        />
                      </div>
                    </>
                  ) : null}
                  {count === 3 ? (
                    <>
                      <div style={{ display: "block" }}>
                        <h3> MEMBERSHIP OPTION</h3>
                        <label>Member Only</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="member_only"
                          onChange={handleInput}
                          value={form.member_only}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Family (Spouse + Children)</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="member_family"
                          onChange={handleInput}
                          value={form.member_family}
                        />
                      </div>
                      <div style={{ display: "block" }}>
                        <label>Extended Family (Parents)</label>
                        <input
                          className="form-control contact-one__form-input"
                          type="text"
                          name="member_extended_family"
                          onChange={handleInput}
                          value={form.member_extended_family}
                        />
                      </div>
                    </>
                  ) : null}
                  {count === 3 ? (
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ width: "50%", display: "block", margin: "auto" }}
                    >
                      Submit
                    </button>
                  ) : null}
                </form>
                <button
                  className="btn btn-dark"
                  type="submit"
                  onClick={() => setCount(count - 1)}
                  disabled={count < 2}
                >
                  ⏪ Back
                </button>
                <button
                  className="btn btn-light"
                  type="submit"
                  onClick={() => setCount(count + 1)}
                  disabled={count > 2}
                >
                  Next ⏩
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* const handleSet = () => {
  setSetter((current) => !current);
}; */
}

export default Applicationform;
