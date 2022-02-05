import React, { Component } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import FormSignUp from "./Forms/FormSignUp";
import FormLogIn from "./Forms/FormLogIn";
import { connect } from "react-redux";
import { handleModalSignUp } from "../../store/handlersSlice";

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

  handleModalSignUp = () => {
    const { dispatch } = this.props;
    dispatch(handleModalSignUp());
  };

  handleSubmitSignUp = (values) => {
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
    this.handleModalSignUp();
  };

  handleSubmitLogIn = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password).then();

    this.handleModalSignUp();
  };
  render() {
    const { activeSignUp, activeLogIn } = this.state;
    return (
      <div
        onClick={this.handleModalSignUp}
        className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-black/50 z-40"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="md:w-[420px] p-12 pt-8 bg-white rounded"
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
            <FormSignUp handleSubmitSignUp={this.handleSubmitSignUp} />
          )}
          {activeLogIn && (
            <FormLogIn handleSubmitLogIn={this.handleSubmitLogIn} />
          )}
        </div>
      </div>
    );
  }
}

export default connect()(ModalSignUp);
