import React from "react";
import style from "../TextButton.module.css";

type HashTagProps = {
  children: string;
};

const HashTag: React.FC<HashTagProps> = ({ children }) => {
  return (
    <div>
      <a className={style.hashtag} href="/">
        {children}
      </a>
    </div>
  );
};

export default HashTag;
