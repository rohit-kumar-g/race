import React, { useState, useEffect } from "react";
import { getCarData, updateCarData } from "../myhelper_r/MyFirebaseConfig";
import AdmFormUpItem from "./AdmFormUpItem"; // Make sure to provide the correct import path
// import AdmFileUpForm from "./AdmFormUpFile";
import AdmUpimg from "./AdmUpimg";
import AdmUpVid from "./AdmUpVid";
const AdmUpItem = () => {
  const [carDataList, setCarDataList] = useState([]);
  const [selectedCarData, setSelectedCarData] = useState(null);
  const [fileMode, setFileMode] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarData();
        setCarDataList(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchData();
  }, []);
  const handleUpdateClick = (carData) => {
    setSelectedCarData(carData);
    setFileMode(0);
  };
  const handleFile1UpdateClick = (carData) => {
    setSelectedCarData(carData);
    setFileMode(1);
  };
  const handleFile2UpdateClick = (carData) => {
    setSelectedCarData(carData);
    setFileMode(2);
  };
  const handleFile3UpdateClick = (carData) => {
    setSelectedCarData(carData);
    setFileMode(3);
  };
  const handleCloseOverlay = () => {
    setSelectedCarData(null);
  };
  const handleUpdateFormSubmit = async (updatedData) => {
    setIsUpdating(true);
    try {
      await updateCarData(updatedData);
      console.log("Car data updated");
      // Update the carDataList with the updated data
      const updatedCarDataList = carDataList.map((data) => {
        if (data.id === updatedData.id) {
          return updatedData;
        }
        return data;
      });
      setCarDataList(updatedCarDataList);
      setSelectedCarData(null); // Close the overlay
    } catch (error) {
      console.error("Error updating car data:", error);
    }
    setIsUpdating(false);
  };
  return (
    <div>
      {carDataList.map((carData) => (
        <div key={carData.id}>
          <p>id = {carData.id}</p>
          <p>Title : {carData.title}</p>
          <button onClick={() => handleUpdateClick(carData)}>Details</button>
          <button onClick={() => handleFile1UpdateClick(carData)}>front</button>
          <button onClick={() => handleFile2UpdateClick(carData)}>other</button>
          <button onClick={() => handleFile3UpdateClick(carData)}>
            Videos
          </button>
        </div>
      ))}
      {selectedCarData && fileMode === 0 && (
        <AdmFormUpItem
          carData={selectedCarData}
          onUpdate={handleUpdateFormSubmit}
          onClose={handleCloseOverlay} // Pass the onClose function here
          isUpdating={isUpdating}
        />
      )}
      {selectedCarData && fileMode === 1 && (
        <AdmUpimg
          SelectedCar={selectedCarData}
          field={"frontimages"}
          onClose={handleCloseOverlay}
        />
      )}
      {selectedCarData && fileMode === 2 && (
        <AdmUpimg
          SelectedCar={selectedCarData}
          field={"images"}
          onClose={handleCloseOverlay}
        />
      )}
      {selectedCarData && fileMode === 3 && (
        <AdmUpVid
          SelectedCar={selectedCarData}
          field={"videos"}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};
export default AdmUpItem;
