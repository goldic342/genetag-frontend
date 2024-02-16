import React from "react";
import style from '../../css/components/SmallButton.module.css'


const SmallButton: React.FC = () => {
  return (
    <>
      <button className={`${"btn"} ${style.small} ${style.blue}`}>MESSAGE</button>
    </>
  );
};

export default SmallButton;
