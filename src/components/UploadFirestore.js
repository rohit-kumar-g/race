import React, { useState, useRef } from "react";
import { addCarData, firestorage } from "../myhelper_r/MyFirebaseConfig";
import UpdateForm from "./Updates";
const CarForm = () => {
  let timeer = new Date().getTime();
  const [carData, setCarData] = useState({
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
    mainimages: [],
    images: [],
  });
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeArray = (e) => {
    const { name, value } = e.target;
    let arr = value.split(",");
    let arr2 = [];
    arr.forEach((i) => {
      i.replace(/^\s+|\s+$/gm, "");
      if (i.length > 1) {
        let text = i.charAt(0).toUpperCase() + i.slice(1);
        arr2.push(text);
      }
    });
    setCarData((prevData) => ({
      ...prevData,
      [name]: arr2,
    }));
  };
  const handleImageUpload = (files) => {
    return new Promise(async (resolve, reject) => {
      const uploadedImages = [];
      for (const file of files) {
        // let i = 1;
        try {
          const uploadTask = firestorage
            .ref(`${timeer}/${file.name}`)
            .put(file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setImageUploadProgress(progress);
              // i++;
              // console.log("Uploaded", file.name, i);
            },
            (error) => {
              // console.error("Error uploading image:", error);
              reject(error);
            }
          );
          await uploadTask;
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          uploadedImages.push(downloadURL);
        } catch (error) {
          // console.error("Error uploading image:", error);
          reject(error);
        }
      }
      setImageUploadProgress(0);
      resolve(uploadedImages);
    });
  };
  const handlemainImageUpload = (files, field) => {
    return new Promise(async (resolve, reject) => {
      const uploadedImages = [];
      for (const file of files) {
        // let i = 1;
        try {
          const uploadTask = firestorage
            .ref(`${timeer}/${field}/${file.name}`)
            .put(file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setImageUploadProgress(progress);
              // i++;
              // console.log("Uploaded", file.name, i);
            },
            (error) => {
              // console.error("Error uploading image:", error);
              reject(error);
            }
          );
          await uploadTask;
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          uploadedImages.push(downloadURL);
        } catch (error) {
          // console.error("Error uploading image:", error);
          reject(error);
        }
      }
      setImageUploadProgress(0);
      resolve(uploadedImages);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      setIsUploading(true);
      const uploadedImages = await handleImageUpload(e.target.images.files);
      const uploadedmainImages = await handlemainImageUpload(
        e.target.mainimages.files,
        "mainn"
      );
      const uploadedvideos = await handlemainImageUpload(
        e.target.videos.files,
        "videos"
      );
      setIsUploading(false);
      const carDataWithImages = {
        ...carData,
        images: uploadedImages,
        mainimages: uploadedmainImages,
        videos: uploadedvideos,
        timestamp: timeer,
      };
      addCarData(carDataWithImages);
      // console.log("Car data saved");
      setCarData({
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
        images: [],
        mainimages: [],
      });
      formRef.current.reset();
    } catch (error) {
      // console.error("Error saving car data:", error);
    }
    setIsSubmitting(false);
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="car-form-container">
      <div>
        <button onClick={handleToggle}>
          {isExpanded ? "Collapse" : "Update Login cred..."}
        </button>
        {isExpanded && <UpdateForm />}
      </div>
      <h2>Car Form</h2>
      <form ref={formRef} className="car-form" onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="timestamp">Timestamp:</label>
          <input
            type="text"
            id="timestamp"
            name="timestamp"
            value={carData.timestamp}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={carData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exteriorColor">Exterior Color:</label>
          <input
            type="text"
            id="exteriorColor"
            name="exteriorColor"
            value={carData.exteriorColor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interiorColor">Interior Color:</label>
          <input
            type="text"
            id="interiorColor"
            name="interiorColor"
            value={carData.interiorColor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interior">Interior:</label>
          <input
            type="text"
            id="interior"
            name="interior"
            value={carData.interior}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelEconomy">Fuel:</label>
          <input
            type="text"
            id="fuelEconomy"
            name="fuelEconomy"
            value={carData.fuelEconomy}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel:</label>
          <input
            type="text"
            id="fuelType"
            name="fuelType"
            value={carData.fuelType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="driveTrain">Drive Train:</label>
          <input
            type="text"
            id="driveTrain"
            name="driveTrain"
            value={carData.driveTrain}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="transmission">Transmission:</label>
          <input
            type="text"
            id="transmission"
            name="transmission"
            value={carData.transmission}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vin">VIN:</label>
          <input
            type="text"
            id="vin"
            name="vin"
            value={carData.vin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="trim">trim:</label>
          <input
            type="text"
            id="trim"
            name="trim"
            value={carData.trim}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="engine">Engine:</label>
          <input
            type="text"
            id="engine"
            name="engine"
            value={carData.engine}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">price:</label>
          <input
            type="text"
            id="mileage"
            name="price"
            value={carData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={carData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={carData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cylinder">Cylinder:</label>
          <input
            type="text"
            id="cylinder"
            name="cylinder"
            value={carData.cylinder}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            value={carData.make}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec1">spec1 :</label>
          <input
            type="text"
            id="spec1"
            name="spec1"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec2">spec2 :</label>
          <input
            type="text"
            id="spec2"
            name="spec2"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec3">spec3 :</label>
          <input
            type="text"
            id="spec3"
            name="spec3"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec4">spec4 :</label>
          <input
            type="text"
            id="spec4"
            name="spec4"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec5">spec5 :</label>
          <input
            type="text"
            id="spec5"
            name="spec5"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec6">spec6 :</label>
          <input
            type="text"
            id="spec6"
            name="spec6"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec7">spec7 :</label>
          <input
            type="text"
            id="spec7"
            name="spec7"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec8">spec8 :</label>
          <input
            type="text"
            id="spec8"
            name="spec8"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec9">spec9 :</label>
          <input
            type="text"
            id="spec9"
            name="spec9"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spec10">spec10 :</label>
          <input
            type="text"
            id="spec10"
            name="spec10"
            onChange={handleChangeArray}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images"> Main Images:</label>
          <input
            type="file"
            id="mainimages"
            name="mainimages"
            // multiple
            disabled={isUploading}
            required
          />
          {isUploading && <progress value={imageUploadProgress} max="100" />}
        </div>
        <div className="form-group">
          <label htmlFor="images"> Videos:</label>
          <input
            type="file"
            id="videos"
            name="videos"
            multiple
            disabled={isUploading}
            // required
          />
          {isUploading && <progress value={imageUploadProgress} max="100" />}
        </div>
        {/* <div className="form-group">
          <label htmlFor="images"> 360 Images:</label>
          <input
            type="file"
            id="t60"
            name="t60"
            multiple
            disabled={isUploading}
            // required
          />
          {isUploading && <progress value={imageUploadProgress} max="100" />}
        </div> */}
        <div className="form-group">
          <label htmlFor="images"> other Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            disabled={isUploading}
            // required
          />
          {isUploading && <progress value={imageUploadProgress} max="100" />}
        </div>
        <button type="submit" disabled={isUploading || isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default CarForm;
