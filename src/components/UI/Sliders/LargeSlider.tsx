import React from "react";
import style from "./Slider.module.css"

type SliderProps = {
  disabled: boolean;
}

const LargeSlider: React.FC <SliderProps> = ({disabled}) => {
  return (
    <>
    {disabled ? (
      <button className={style.slider_disabled}></button>
    ) : (
      <button className={style.slider}></button>
    )}
    </>
  );
};

export default LargeSlider;
