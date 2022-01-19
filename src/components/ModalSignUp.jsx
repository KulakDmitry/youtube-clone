import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import { auth } from "../firebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

class ModalSignUp extends Component {
  handleSubmit = (values) => {
    const { handleModalSignUp } = this.props;
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      (user) =>
        updateProfile(auth.currentUser, { displayName: values.username })
    );
    handleModalSignUp();
  };
  render() {
    const { handleModalSignUp } = this.props;
    return (
      <div
        onClick={handleModalSignUp}
        className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black/50 z-40 "
      >
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={{ username: "", email: "", password: "" }}
        >
          <Form
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-between p-12 bg-white rounded"
          >
            <div className="flex justify-between items-center">
              <span className="mr-4">Email</span>
              <Field
                className="border border-gray-300  text-lg "
                name="email"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="mr-4">Username</span>
              <Field
                className="border border-gray-300 text-lg"
                name="username"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="mr-4">Password</span>
              <Field
                className="border border-gray-300 text-lg"
                type="password"
                name="password"
              />
            </div>
            <button
              className="w-[50%] m-auto border border-gray-300 bg-gray-200 hover:bg-gray-400 hover:text-white p-2 mt-10 rounded-full"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default ModalSignUp;
