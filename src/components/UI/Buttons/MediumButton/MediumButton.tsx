import React from "react";
import classes from "./MediumButton.module.css";
import style from "../Button.module.css"

type ButtonProps = {
  children: string;
}

const MediumButton: React.FC <ButtonProps> = ({children}) => {
  return (
    <>
      <button className={`${style.btn} ${classes.medium} ${classes.blue}`}>
        {children}
      </button>
    </>
  );
};

export default MediumButton;
