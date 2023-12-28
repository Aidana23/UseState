import React, { useState } from "react";
import s from "./ModalAnimation.module.css";

const ModalAnimation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <button className={s.btn} onClick={handleToggle}>
        toggle
      </button>
      <div className={toggle ? `${s.modal} ${s.active}` : s.modal}>
        <h2>Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          facilis.
        </p>
      </div>
    </div>
  );
};

export default ModalAnimation;
