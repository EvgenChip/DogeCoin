import React from "react";
import "./style.scss";

const buttonType = {
  normal: "normalType",
  small: "smallType",
};

export const Button = ({ children, type = "normal", onClick }) => {
  return (
    <div onClick={onClick} className={`buttonWrap ${buttonType[type]}`}>
      {children}
    </div>
  );
};
