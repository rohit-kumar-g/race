import React, { useState, useEffect } from "react";
import { getCarData, deleteCarData } from "../myhelper_r/MyFirebaseConfig"; // Assuming you have a function for deleting car data
const AdmDeleteItem = () => {
  const [carDataList, setCarDataList] = useState([]);
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
  const handleDeleteClick = async (docId) => {
    try {
      await deleteCarData(docId); // Implement this function to delete car data
      console.log("Car data deleted");
      const updatedCarDataList = carDataList.filter(
        (data) => data.id !== docId
      );
      setCarDataList(updatedCarDataList);
    } catch (error) {
      console.error("Error deleting car data:", error);
    }
  };
  return (
    <div>
      {carDataList.map((carData) => (
        <div key={carData.id}>
          <p>{carData.id}</p>
          <p>{carData.title}</p>
          <button onClick={() => handleDeleteClick(carData.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default AdmDeleteItem;
