import React from "react";
import classes from './SmallButton.module.css'
import style from "../Button.module.css"

type ButtonProps = {
  children: string;
}

const SmallButton: React.FC <ButtonProps> = ({children}) => {
  return (
    <>
      <button className={`${style.btn} ${classes.small} ${classes.blue}`}>{children}</button>
    </>
  );
};

export default SmallButton;
