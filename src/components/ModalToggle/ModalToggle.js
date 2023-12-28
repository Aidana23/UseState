import React, { useState } from "react";
import s from "./ModalToggle.module.css";

const ModalToggle = () => {
  // const [toggle, setToggle] = React.useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleClose = () => {
    setToggle(false);
  };
  console.log("RERENDER", toggle);
  return (
    <div>
      <button className={s.btn} onClick={handleToggle}>
        toggle
      </button>
      {toggle && (
        <div>
          <button onClick={handleClose}>X</button>
          <h2>Modal</h2>
        </div>
      )}
      {/* {toggle ? (
        <div>
          <button onClick={handleClose}>X</button>
          <h2>Modal</h2>
        </div>
      ) : (
        <h2>hello</h2>
      )} */}
    </div>
  );
};

export default ModalToggle;
