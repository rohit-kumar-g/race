import React from "react";
const AdmFileUpForm = ({ carData, onUpdate, isUpdating, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="update-form">
          <h2>Update Car Data</h2>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdmFileUpForm;
