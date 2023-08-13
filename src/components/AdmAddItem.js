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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCarData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // const handleChangeArray = (e) => {
  //   const { name, value } = e.target;
  //   let arr = value.split(",");
  //   let arr2 = [];
  //   arr.forEach((i) => {
  //     i.replace(/^\s+|\s+$/gm, "");
  //     if (i.length > 1) {
  //       let text = i.charAt(0).toUpperCase() + i.slice(1);
  //       arr2.push(text);
  //     }
  //   });
  //   setCarData((prevData) => ({
  //     ...prevData,
  //     [name]: arr2,
  //   }));
  // };
  // const handleFileUpload = (files, field ,timeer) => {
  //   return new Promise(async (resolve, reject) => {
  //     const uploadedImages = [];
  //     for (const file of files) {
  //       // let i = 1;
  //       try {
  //         const uploadTask = firestorage
  //           .ref(`${timeer}/${field}/${file.name}`)
  //           .put(file);
  //         uploadTask.on(
  //           "state_changed",
  //           (snapshot) => {
  //             const progress = Math.round(
  //               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //             );
  //             setImageUploadProgress(progress);
  //             // i++;
  //             // console.log("Uploaded", file.name, i);
  //           },
  //           (error) => {
  //             // console.error("Error uploading image:", error);
  //             reject(error);
  //           }
  //         );
  //         await uploadTask;
  //         const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
  //         uploadedImages.push(downloadURL);
  //       } catch (error) {
  //         // console.error("Error uploading image:", error);
  //         reject(error);
  //       }
  //     }
  //     setImageUploadProgress(0);
  //     resolve(uploadedImages);
  //   });
  // };
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
