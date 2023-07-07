import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  getCarDataindv } from '../Helper/FirebaseConfig';
import SingleCarPage from '../components/SingleCarPage';
const SingleCar = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSingleCar = async () => {
      const carData = await getCarDataindv(carId);
      setCar(carData);
      setLoading(false);
    };
    fetchSingleCar();
  }, [carId]);
  return (
    <div>
      {/* <h2>Car Details</h2> */}
      {loading ? (
        <p>Loading car details...</p>
      ) : (
        car && (
          <SingleCarPage car={car}/>
        )
      )}
    </div>
  );
};
export default SingleCar;
