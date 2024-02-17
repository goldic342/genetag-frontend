import React from "react";
import style from "../TextButton.module.css";

type RepliesLightProps = {
  children: string;
};

const RepliesLight: React.FC<RepliesLightProps> = ({ children }) => {
  return (
    <div>
      <a className={style.replies_light} href="/">
        {children}
      </a>
    </div>
  );
};

export default RepliesLight;
