import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const FormLogIn = ({ handleSubmitLogIn }) => {
  return (
    <Formik
      onSubmit={handleSubmitLogIn}
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email should be in a correct format like 'email@mail.ru' ")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
          ),
      })}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="mr-4">Email</span>
            <Field className="border border-gray-300  text-lg " name="email" />
          </div>
          {errors.email && touched.email ? (
            <div className="text-center text-red-600">{errors.email}</div>
          ) : null}
          <div className="flex justify-between items-center mt-4">
            <span className="mr-4">Password</span>
            <Field
              className="border border-gray-300 text-lg"
              type="password"
              name="password"
            />
          </div>
          {errors.password && touched.password ? (
            <div className="text-center text-red-600">{errors.password}</div>
          ) : null}
          <button
            className="w-[50%] m-auto border border-gray-300 bg-gray-200 hover:bg-gray-400 hover:text-white p-2 mt-10 rounded-full"
            type="submit"
          >
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogIn;
