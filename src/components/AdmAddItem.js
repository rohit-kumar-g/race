import React, { useState, useRef } from "react";
import { addCarData } from "../myhelper_r/MyFirebaseConfig";
import {
  handleChange,
  handleChangeArray,
  handleFileUpload,
} from "../myhelper_r/MyFormFun";
import AdmCardFileUp from "./AdmCardFileUp";
import AdmCardinp from "./AdmCardinp";
import { CarFormStyled } from "../styles/AllStyles";
const AdmAddItem = () => {
  let timeer = new Date().getTime();
  const initialState = {
    timestamp: "",
    title: "",
    year: "",
    make: "",
    model: "",
    price: "",
    exteriorColor: "",
    interior: "",
    interiorColor: "",
    bodyType: "",
    fuelEconomy: "",
    cylinder: "",
    driveTrain: "",
    transmission: "",
    vin: "",
    trim: "",
    engine: "",
    mileage: "",
    stock: "",
    t60: [],
    videos: [],
    frontimages: [],
    images: [],
    spec1: [],
    spec2: [],
    spec3: [],
    spec4: [],
    spec5: [],
    spec6: [],
    spec7: [],
    spec8: [],
    spec9: [],
    spec10: [],
  };
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
  const [carData, setCarData] = useState(initialState);
  const [frontimgprog, setfrontimgprog] = useState(0);
  const [otherprog, setotherprog] = useState(0);
  const [videoprog, setvideoprog] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      setIsUploading(true);
      const uploadedImages = await handleFileUpload(
        e.target.images.files,
        "moreImg",
        timeer,
        setfrontimgprog
      );
      const uploadedfrontImages = await handleFileUpload(
        e.target.frontimages.files,
        "CarFrontImg",
        timeer,
        setotherprog
      );
      const uploadedvideos = await handleFileUpload(
        e.target.videos.files,
        "CarVideo",
        timeer,
        setvideoprog
      );
      setIsUploading(false);
      const carDataWithImages = {
        ...carData,
        images: uploadedImages,
        frontimages: uploadedfrontImages,
        videos: uploadedvideos,
        timestamp: timeer,
      };
      addCarData(carDataWithImages);
      console.log("Car data saved");
      setCarData(initialState);
      formRef.current.reset();
    } catch (error) {
      // console.error("Error saving car data:", error);
    }
    setIsSubmitting(false);
  };
  return (
    <CarFormStyled>
      <div className="car-form-container">
        <h2>Car Form</h2>
        <form ref={formRef} className="car-form" onSubmit={handleSubmit}>
          {details.map((d) => (
            <AdmCardinp
              key={d}
              id={d}
              value={carData[d]}
              handleChange={(e) => handleChange(e, setCarData)}
            />
          ))}
          {spec.map((fieldName) => (
            <AdmCardinp
              key={fieldName}
              id={fieldName}
              handleChange={(e) => handleChangeArray(e, setCarData)}
            />
          ))}
          <AdmCardFileUp
            id={"frontimages"}
            isUploading={isUploading}
            uploadProgress={frontimgprog}
          />
          <AdmCardFileUp
            id={"images"}
            isUploading={isUploading}
            uploadProgress={otherprog}
          />
          <AdmCardFileUp
            id={"videos"}
            isUploading={isUploading}
            uploadProgress={videoprog}
          />
          <button type="submit" disabled={isUploading || isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </CarFormStyled>
  );
};
export default AdmAddItem;
