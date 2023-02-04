import React from "react";
import "./styles.scss";

const buttonType = {
  normal: "normalType",
  small: "smallType",
};

export const Button = ({ children, type = "normal", onClick, disabled }) => {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className={`buttonWrap ${buttonType[type]} ${
        disabled ? "disabled" : ""
      }`}>
      {children}
    </div>
  );
};
