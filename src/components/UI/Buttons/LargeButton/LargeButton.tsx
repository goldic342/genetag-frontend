import React from "react";
import classes from "./LargeButton.module.css";
import style from "../Button.module.css"

type ButtonProps = {
  children: string;
}

const LargeButton: React.FC <ButtonProps> = ({children}) => {
  return (
    <>
      <button className={`${style.btn} ${classes.large}`}>
        {children}
      </button>
    </>
  );
};

export default LargeButton;
