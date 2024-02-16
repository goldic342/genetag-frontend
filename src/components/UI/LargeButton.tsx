import React from "react";
import style from "../../css/components/LargeButton.module.css";

const LargeButton: React.FC = () => {
  return (
    <>
      <button className={`${"btn"} ${style.large} ${style.blue}`}>
        Get matches
      </button>
    </>
  );
};

export default LargeButton;
