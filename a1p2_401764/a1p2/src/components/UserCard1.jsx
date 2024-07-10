// src/components/UserCard1.jsx

import React from "react";

function UserCard1({ name, email }) {
  return (
    <div>
      <p>Here's the user information</p>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard1;
