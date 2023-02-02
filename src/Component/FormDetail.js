import React from "react";
import { Formik } from "formik";
import ContactForm from "./ContactForm";
import * as Yup from "yup";

function FormDetail() {
  const ErrorSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(2, "too short")
      .max(20, "too long"),
    email: Yup.string().email("Invalid email").required("Required"),
    age: Yup.number().positive().integer().required("Required"),
    phonenumber: Yup.string().required("Phonenumber is Required"),
    // .matches(
    //   //   /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,

    //   "Invalid Phone Number"
    // ),
    message: Yup.string()
      .min(5, "too short!")
      .max(200, "too long!")
      .required("Required"),
    // file: Yup.string().mixing().required("File is require"),
  });
  return (
    <div className="Container pt-5 ">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-6">
          <h1 className="text-center pt-3 text-secondary">KSK Info Form</h1>
          <Formik
            initialValues={{
              username: "",
              email: "",
              age: "",
              phonenumber: "",
              message: "",
              file: "null",
            }}
            onSubmit={(value, { resetForm }) => {
              console.log(value);
              resetForm();
            }}
            validationSchema={ErrorSchema}
            component={ContactForm}
          />
        </div>
      </div>
    </div>
  );
}

export default FormDetail;
