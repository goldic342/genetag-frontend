import React from "react";
import style from "../TextButton.module.css";

type ProfileTwoProps = {
  children: string;
};

const ProfileTwo: React.FC<ProfileTwoProps> = ({ children }) => {
  return (
    <div>
      <a className={style.profile_two} href="/">
        {children}
      </a>
    </div>
  );
};

export default ProfileTwo;
