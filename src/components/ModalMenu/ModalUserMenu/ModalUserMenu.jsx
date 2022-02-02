import React, { Component } from "react";
import { ReactComponent as SignOutIcon } from "../../../icons/sign-out-icon.svg";
import { ReactComponent as SettingsIcon } from "../../../icons/settings-icon.svg";
import { ReactComponent as AddProfileIcon } from "../../../icons/addProfileIcon.svg";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import defaultAvatar from "../../../icons/profileDefaultAvatar.jpg";
import { connect } from "react-redux";
import { updateUserData } from "../../store/updateUserData";
import { getUser } from "../../store/userData";

class ModalUserMenu extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }

  componentDidMount() {
    const { currentUser, dispatch } = this.props;

    dispatch(getUser(currentUser));
  }

  handleFileUpdate = () => {
    this.fileInput.current.click();
  };

  handleSend = (e) => {
    const { currentUser, dispatch } = this.props;
    const file = e.target.files[0];
    dispatch(updateUserData({ file, username: currentUser.displayName }));
  };

  handelSignOut = () => {
    const { handleUserModalMenu } = this.props;
    signOut(auth).then();
    handleUserModalMenu();
  };
  render() {
    const { currentUser, user } = this.props;
    return user ? (
      <div className="fixed z-30 right-3 top-14 bg-white border-b border-r border-l">
        <div className="flex items-center p-4 border-b">
          <div className="relative ">
            <AddProfileIcon
              onClick={this.handleFileUpdate}
              className="cursor-pointer absolute top-0
            left-0 p-1.5 w-10 h-10 rounded-full opacity-0 hover:opacity-70 bg-gray-300"
            />
            <input
              type="file"
              className="hidden"
              ref={this.fileInput}
              onChange={this.handleSend}
            />
            <img
              className="w-10 h-10 rounded-full "
              src={user && user.profileSrc ? user.profileSrc : defaultAvatar}
              alt=""
            />
          </div>

          <div>
            <span className="pl-4 font-semibold text-base">
              {currentUser.displayName}
            </span>
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
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
};

export default connect(mapStateToProps)(ModalUserMenu);
