// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn? <p>Welcome back again!!!</p> : <p>Please LogIn</p>}</div>;
}

export default LoginMessage;
