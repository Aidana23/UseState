import React from "react";
// import ModalToggle from "./components/ModalToggle/ModalToggle";
// import DarkLight from "./components/DarkLight/DarkLight";
// import Modal2 from "./components/Modal2/Modal2";
// import Todo from "./components/Todo/Todo";

import Counter from "./components/Counter/Counter";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Todo from "./components/Todo/Todo";
import Giphy from "./components/Giphy/Giphy";
import Kinopoisk from "./components/Kinopoisk/Kinopoisk";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modal" element={<Modal/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/giphy" element={<Giphy/>} />
        <Route path="/kinopoisk" element={<Kinopoisk/>} />

        {/* <Route path="/todo" element={<Todo/>} /> */}

      </Routes>
    </BrowserRouter>

    // <div>
    //   <ModalToggle/>
    //   <DarkLight/>
    //   <Modal2/>

    //   <Todo/>
      
    // </div>
  );
};

export default App;
