import React, { Component } from "react";
import { ReactComponent as SignOutIcon } from "../icons/sign-out-icon.svg";
import { ReactComponent as SettingsIcon } from "../icons/settings-icon.svg";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

class ModalUserMenu extends Component {
  handelSignOut = () => {
    const { handleUserModalMenu } = this.props;
    signOut(auth).then();
    handleUserModalMenu();
  };
  render() {
    const { profileSrc, fullName } = this.props;
    return (
      <div className="fixed z-30 right-3 top-14 bg-white border-b border-r border-l">
        <div className="flex items-center p-4 border-b">
          <div>
            <img className="w-10 h-10 rounded-full" src={profileSrc} alt="" />
          </div>
          <div>
            <span className="pl-4 font-semibold text-base">{fullName}</span>
          </div>
        </div>
        <button className="p-3 flex items-center hover:bg-gray-100 w-full">
          <SettingsIcon className="w-6 h-6" />
          <span className="pl-2 text-sm font-light">Settings</span>
        </button>
        <button
          onClick={this.handelSignOut}
          className="p-3 flex items-center hover:bg-gray-100 w-full"
        >
          <SignOutIcon className="w-6 h-6" />
          <span className="pl-2 text-sm font-light">Sign Out</span>
        </button>
      </div>
    );
  }
}

export default ModalUserMenu;
