import React from "react";
import style from "../TextButton.module.css";

type RepliesDefaultProps = {
  children: string;
};

const RepliesDefault: React.FC<RepliesDefaultProps> = ({ children }) => {
  return (
    <div>
      <a className={style.replies_default} href="/">
        {children}
      </a>
    </div>
  );
};

export default RepliesDefault;
