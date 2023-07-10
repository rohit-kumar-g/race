import React from "react";
import CardList from "../components/CardList";
const ListViewCar = ({ cars}) => (
  <ul className="list-view-items">
    {cars?.map((car, index ) => (
      <CardList car={car} key={index} />
    ))}
  </ul>
);
export default ListViewCar;
