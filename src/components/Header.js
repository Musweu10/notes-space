import React from "react";
import { MdBrightness6 } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Your Notes Space</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <MdBrightness6 size="1.5em" />
      </button>
    </div>
  );
};

export default Header;
