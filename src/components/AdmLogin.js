import React, { useState } from "react";
import { fireauth } from "../myhelper_r/MyFirebaseConfig";
function AdmFormLogin({ state }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fireauth.signInWithEmailAndPassword(email, password);
      state(true);
      alert("Authentication successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Authentication failed. Please try again.");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default AdmFormLogin;
