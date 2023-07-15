import React, { useState } from "react";
import { firestore } from "../myhelper_r/MyFirebaseConfig";

function UpdateForm() {
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
      const docRef = firestore.collection("carinfo").doc("metainfo");

      // Update the document fields
      await docRef.update({
        email,
        password,
      });

      alert("Update successful!");
    } catch (error) {
      console.error("Error updating car info:", error);
      alert("Update failed. Please try again.");
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
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateForm;
