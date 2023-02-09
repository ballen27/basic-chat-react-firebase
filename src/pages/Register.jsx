import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const Register = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError({ errorCode, errorMessage });
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Simple Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passwords" />
          <button type="submit">Sign up</button>
          {error && <p>{error.errorMessage}</p>}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
