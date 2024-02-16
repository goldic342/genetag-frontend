import React from "react";
import style from "../../css/components/TextButton.module.css";

const TextButton: React.FC = () => {
  return (
    <div>
      <a className={style.replies_light} href="/">
        My Profile
      </a>
    </div>
  );
};

export default TextButton;
