import React, { useState, useRef, useEffect, useMemo } from "react";
import AdmCardinp from "./AdmCardinp";
import { handleChange, handleChangeArray } from "../myhelper_r/MyFormFun";
const AdmFormUpItem = ({ carData, onUpdate, isUpdating, onClose }) => {
  const [updatedCarData, setUpdatedCarData] = useState(carData);
 const details = [
    "title",
    "year",
    "make",
    "model",
    "price",
    "exteriorColor",
    "interior",
    "interiorColor",
    "bodyType",
    "fuelEconomy",
    "cylinder",
    "driveTrain",
    "transmission",
    "vin",
    "trim",
    "engine",
    "mileage",
    "stock",
  ];
  const spec = [
    "spec1",
    "spec2",
    "spec3",
    "spec4",
    "spec5",
    "spec6",
    "spec7",
    "spec8",
    "spec9",
    "spec10",
  ];
  const allFields = useMemo(
    () => [
      "title",
      "year",
      "make",
      "model",
      "price",
      "exteriorColor",
      "interior",
      "interiorColor",
      "bodyType",
      "fuelEconomy",
      "cylinder",
      "driveTrain",
      "transmission",
      "vin",
      "trim",
      "engine",
      "mileage",
      "stock",
      "spec1",
      "spec2",
      "spec3",
      "spec4",
      "spec5",
      "spec6",
      "spec7",
      "spec8",
      "spec9",
      "spec10",
    ],
    []
  );
  const cntRef = useRef(1);
  useEffect(() => {
    if (cntRef.current === 1) {
      setTimeout(() => {
        allFields.forEach((element, index) => {
          // console.log("Setting value for:", element);
          const inputField = document.getElementById(element);
          if (inputField) {
            inputField.value = carData[element];
          } else {
            // console.log("Input field not found for:", element);
          }
          if (index === allFields.length - 1) {
            cntRef.current = 0;
          }
        });
      }, 200);
    }
  }, [allFields, carData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedCarData);
  };
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="update-form">
          <h2>Update Car Data</h2>
          <form onSubmit={handleSubmit}>
            {details.map((d) => (
              <AdmCardinp
                key={d}
                id={d}
                handleChange={(e) => handleChange(e, setUpdatedCarData)}
              />
            ))}
            {spec.map((fieldName) => {
              console.log(fieldName + updatedCarData[fieldName]);
              return (
                <AdmCardinp
                  key={fieldName}
                  id={fieldName}
                  handleChange={(e) => handleChangeArray(e, setUpdatedCarData)}
                />
              );
            })}
            <button type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update"}
            </button>
          </form>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdmFormUpItem;
