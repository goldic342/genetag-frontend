import React from "react";
import style from "./Slider.module.css"

type SliderProps = {
  disabled: boolean;
}

const SmallSlider: React.FC <SliderProps> = ({disabled}) => {
  return (
    <>
    {disabled ? (
      <button className={style.mini_slider_disabled}></button>
    ) : (
      <button className={style.mini_slider}></button>
    )}
    </>
  );
};

export default SmallSlider;
