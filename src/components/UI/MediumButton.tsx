import React from "react";
import style from "../../css/components/MediumButton.module.css";

const MediumButton: React.FC = () => {
  return (
    <>
      <button className={`${"btn"} ${style.medium} ${style.blue}`}>
        let’s check
      </button>
    </>
  );
};

export default MediumButton;
