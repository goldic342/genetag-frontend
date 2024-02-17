import React from "react";
import style from "../TextButton.module.css";

type DownloadButtonProps = {
  children: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ children }) => {
  return (
    <div>
      <a className={style.download} href="/">
        {children}
      </a>
    </div>
  );
};

export default DownloadButton;
