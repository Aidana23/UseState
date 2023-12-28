import React from "react";
import s from "./Modal2.module.css";

const Modal2 = (props) => {
  return (
    <div>
      <div className={s.modal1}>
        <div className={s.modal}>
          <span className={s.close} onClick={props.onClose}>
            &times;
          </span>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal2;
