import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleCarPage from "../components/SingleCarPage";
import SkeletonLoadPg from "../components/LoadingPage";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";

const SingleCar = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cars } = useMyProductContext();

  useEffect(() => {
    if (cars && cars.length > 0) {
      const foundCar = cars.find((car) => car.id === carId);

      if (foundCar) {
        setCar(foundCar);
       // console.log("car", foundCar);
      } else {
       // console.log("Car object not found in cars");
      }
    } else {
     // console.log("Empty or undefined cars array");
    }

    setLoading(false);
  }, [carId, cars]);

  return (
    <div>
      {loading ? (
        <SkeletonLoadPg />
      ) : car ? (
        <SingleCarPage car={car} />
      ) : (
        <SkeletonLoadPg />
      )}
    </div>
  );
};

export default SingleCar;
