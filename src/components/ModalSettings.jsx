import React, { Component } from "react";
import { ReactComponent as SettingsAppearanceIcon } from "../icons/appearance.svg";
import { ReactComponent as SettingsLanguageIcon } from "../icons/language-icon.svg";

class ModalSettings extends Component {
  render() {
    const { visibleSettings } = this.props;
    return (
      <div>
        {visibleSettings && (
          <div className="fixed z-20 top-14 w-72 mx-2 right-32 border-gray-200 border-b border-l border-r bg-white">
            <div className="flex items-center h-10 p-4  hover:bg-gray-100 cursor-pointer">
              <SettingsAppearanceIcon className="w-5" />
              <span className="ml-6 text-sm">Appearance: Device theme</span>
            </div>
            <div className="flex items-center h-10 p-4  hover:bg-gray-100 cursor-pointer">
              <SettingsLanguageIcon className="w-5" />
              <span className="ml-6 text-sm">Language: English</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalSettings;
