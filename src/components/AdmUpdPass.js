import React, { useState } from "react";
import { fireauth } from "../myhelper_r/MyFirebaseConfig";
function AdmUpdPass() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fireauth.sendPasswordResetEmail(email);
      alert("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Send Password Reset Email</button>
    </form>
  );
}
export default AdmUpdPass;
