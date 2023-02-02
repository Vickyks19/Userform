import React, { useState } from "react";
import { Field, Form } from "formik";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function ContactForm({ errors, touched, isValid, dirty }) {
  // console.log(errors);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, age, phonenumber, message, file } = e.target;
    const data = {
      username: username.value,
      email: email.value,
      age: age.value,
      phonenumber: phonenumber.value,
      message: message.value,
      file: file.value,
    };

    axios.post("http://localhost:4000/register", data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/Dashboard");
      } else {
        setError(true);
      }
    });

    console.log(e.target);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="col-form-label">Name :</label>
        <Field
          name="username"
          className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}
      </div>

      <div className="form-group">
        <label className="col-form-label">Email :</label>
        <Field
          name="email"
          className={
            touched.email
              ? `form-control ${errors.email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.email && errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}
      </div>

      <div className="form-group">
        <label className="col-form-label">Age :</label>
        <Field
          name="age"
          className={
            touched.age
              ? `form-control ${errors.age ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.age && errors.age && (
          <small className="text-danger">{errors.age}</small>
        )}
      </div>

      <div className="form-group">
        <label className="col-form-label">Phone Number :</label>
        <Field
          name="phonenumber"
          className={
            touched.phonenumber
              ? `form-control ${errors.phonenumber ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.phonenumber && errors.phonenumber && (
          <small className="text-danger">{errors.phonenumber}</small>
        )}

        <div className="form-group">
          <label className="col-form-label">Message :</label>
          <Field
            as="textarea"
            name="message"
            className={
              touched.message
                ? `form-control ${errors.message ? "invalid" : "valid"}`
                : `form-control`
            }
            type="text"
          />
          {touched.message && errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}
        </div>
      </div>
      <input name="file" type="file" />
      <button className="btn-btn-primary my-3" disabled={!isValid || !dirty}>
        Submit
      </button>
      {error && <p className="text-danger">form is not submitted</p>}
    </Form>
  );
}
