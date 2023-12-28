import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleAllValues = (prop) => (e) => {
    setLogin((prev) => ({ ...prev, [prop]: e.target.value }));
  };

  const clearState = (prop) => (e) => {
    setLogin((prev) => ({ ...prev, [prop]: "" }));
  };

 

  return (
    <>
      <h2>Login</h2>

      <input
        type="text"
        value={login.firstName}
        onChange={handleAllValues("firstName")}
      />

      <strong onClick={clearState("firstName")}>Х</strong>

      <input
        type="text"
        value={login.lastName}
        onChange={handleAllValues("lastName")}
      />

      <strong onClick={clearState("lastName")}>Х</strong>

      <input
        type="password"
        value={login.password}
        onChange={handleAllValues("password")}
      />

        <div className='output'>
                <p>{login.firstName}</p>
                <p>{login.lastName}</p>
                <p>{login.password}</p>
       </div>

     


    </>
  );
};

export default Login;
