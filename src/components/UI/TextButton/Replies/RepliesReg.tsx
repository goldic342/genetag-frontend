import React from "react";
import style from "../TextButton.module.css";

type RepliesRegProps = {
  children: string;
};

const RepliesReg: React.FC<RepliesRegProps> = ({ children }) => {
  return (
    <div>
      <a className={style.replies_regular} href="/">
        {children}
      </a>
    </div>
  );
};

export default RepliesReg;
