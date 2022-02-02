import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import * as Yup from "yup";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

class ModalSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLogIn: false,
      activeSignUp: true,
    };
  }
  handleLogIn = () => {
    this.setState({
      activeLogIn: true,
      activeSignUp: false,
    });
  };
  handleSignUp = () => {
    this.setState({
      activeLogIn: false,
      activeSignUp: true,
    });
  };

  handleSubmitSignUp = (values) => {
    const { handleModalSignUp } = this.props;
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async () => {
        await updateProfile(auth.currentUser, { displayName: values.username });
        await setDoc(doc(db, "users", values.username), {
          username: values.username,
          profileSrc: "",
          followers: "",
          likedVideos: "",
          DislikedVideos: "",
        });
      }
    );
    handleModalSignUp();
  };

  handleSubmitLogIn = (values) => {
    const { handleModalSignUp } = this.props;
    signInWithEmailAndPassword(auth, values.email, values.password).then();
    handleModalSignUp();
  };
  render() {
    const { handleModalSignUp } = this.props;
    const { activeSignUp, activeLogIn } = this.state;
    return (
      <div
        onClick={handleModalSignUp}
        className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black/50 z-40 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="md:w-[40%] xl:w-[32%] 2xl:w-[22%] p-12 pt-8 bg-white rounded"
        >
          <div className="flex justify-around mb-10">
            <button
              className={`${
                activeLogIn && "text-blue-600 border-b border-blue-600"
              }`}
              onClick={this.handleLogIn}
            >
              <span className="p-4">Log In</span>
            </button>
            <button
              className={`${
                activeSignUp && "text-blue-600 border-b border-blue-600"
              }`}
              onClick={this.handleSignUp}
            >
              <span className="p-4">Sing Up</span>
            </button>
          </div>
          {activeSignUp && (
            <Formik
              onSubmit={this.handleSubmitSignUp}
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={Yup.object().shape({
                username: Yup.string()
                  .required("Username is required")
                  .max(20, "Need less than 20"),
                email: Yup.string()
                  .email(
                    "Email should be in a correct format like 'email@mail.ru' "
                  )
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
                    <Field
                      className="border border-gray-300  text-lg "
                      name="email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-center text-red-600">
                      {errors.email}
                    </div>
                  ) : null}
                  <div className="flex justify-between items-center mt-4">
                    <span className="mr-4">Username</span>
                    <Field
                      className="border border-gray-300 text-lg"
                      name="username"
                    />
                  </div>
                  {errors.username && touched.username ? (
                    <div className="text-center text-red-600">
                      {errors.username}
                    </div>
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
                    <div className="text-center text-red-600">
                      {errors.password}
                    </div>
                  ) : null}
                  <button
                    className="w-[50%] m-auto border border-gray-300 bg-gray-200 hover:bg-gray-400 hover:text-white p-2 mt-10 rounded-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          )}
          {activeLogIn && (
            <Formik
              onSubmit={this.handleSubmitLogIn}
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email(
                    "Email should be in a correct format like 'email@mail.ru' "
                  )
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
                    <Field
                      className="border border-gray-300  text-lg "
                      name="email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-center text-red-600">
                      {errors.email}
                    </div>
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
                    <div className="text-center text-red-600">
                      {errors.password}
                    </div>
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
          )}
        </div>
      </div>
    );
  }
}

export default ModalSignUp;
