import React from "react";
import CardGrid from "./CardGrid";
const GridViewCar = ({ cars }) => {
  return (
    <ul className="cssnothing">
      {cars?.map((car, index) => (
        <CardGrid car={car} key={index} />
      ))}
    </ul>
  );
};
export default GridViewCar;
