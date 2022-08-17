import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ValuePlusSeniors = () => {
  const navigate = useNavigate();
  const [setter, setSetter] = useState(0);
  const [userValues, setUserValues] = useState({
    age: "",
    membership: "",
    cover: "",
  });

  const [form, setForm] = useState({
    id_number: "",
    name: "",
    surname: "",
    cnumber: "",
    email_ad: "",
    single_couple: "",
    type_cover: "",
  });

  const [modalIsOpen, setIsOpen] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
        "template_suxsi5i",
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
            name: "",
            surname: "",
            cnumber: "",
            email_ad: "",
            single_couple: "",
            type_cover: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div>
        <div>
          <div>
            <Modal isOpen={modalIsOpen} contentLabel="Message Sent">
              <h1 style={{ display: "block", margin: "auto" }}>
                Value Plus Seniors Plan Application Form
              </h1>

              <div>
                <form onSubmit={sendMail}>
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
                    <label>Single or Couple?</label>
                    <input
                      className="form-control contact-one__form-input"
                      type="text"
                      name="employer"
                      onChange={handleInput}
                      value={form.single_couple}
                    />
                  </div>
                  <div style={{ display: "block" }}>
                    <label>Type of Cover</label>
                    <input
                      className="form-control contact-one__form-input"
                      type="text"
                      name="work_number"
                      onChange={handleInput}
                      value={form.type_cover}
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: "50%", display: "block", margin: "auto" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuePlusSeniors;
