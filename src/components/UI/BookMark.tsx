import React from "react";
import style from '../../css/components/BookMark.module.css';

const BookMark: React.FC = () => {
  return (
    <div>
      <button className={style.bookmark}></button>
    </div>
  );
};

export default BookMark;
