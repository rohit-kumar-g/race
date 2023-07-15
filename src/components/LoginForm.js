import React, { useState, useEffect } from "react";
import { firestore } from "../myhelper_r/MyFirebaseConfig";

function LoginForm({ state }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hemail, setHEmail] = useState("");
  const [hpassword, setHPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const docRef = firestore.collection("carinfo").doc("metainfo");
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          const carData = docSnapshot.data();
          const { email: pemail, password: ppassword } = carData;
          setHEmail(pemail);
          setHPassword(ppassword);
        } else {
          console.log("Document does not exist!");
        }
      } catch (error) {
        console.error("Error fetching car info:", error);
      }
    };

    fetchCarInfo();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email === hemail && password === hpassword) {
      alert("Authentication successful!");
      state(true);
    } else {
      alert("Authentication failed. Please try again.");
      state(false);
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

export default LoginForm;
