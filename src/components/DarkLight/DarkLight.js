import React, { useState } from "react";
import s from './DarkLight.module.css'
import ModalOpen from './../Modal2/ModalOpen'


const DarkLight = () => {
  const [theme, setTheme] = useState(false);
  const handleThemeChange = () => {
    setTheme(prev=>!prev);
  };
  console.log(theme);

  return (
    <div className={theme ? s.black : s.white}>
      <button className="btn" onClick={handleThemeChange}>Toggle theme</button>
      <div className="card">
        <h2>Best Cars</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          eaque?
        </p>
        <ModalOpen>
          <button>Apply</button>
        </ModalOpen>
        


      </div>
    </div>
  );
};

export default DarkLight;
