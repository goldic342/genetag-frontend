import React from "react";
import style from "../TextButton.module.css";

type ProfileOneProps = {
  children: string;
};

const ProfileOne: React.FC<ProfileOneProps> = ({ children }) => {
  return (
    <div>
      <a className={style.profile_first} href="/">
        {children}
      </a>
    </div>
  );
};

export default ProfileOne;
