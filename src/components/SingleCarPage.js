import React from "react";
import CollapsibleList from "./CollapsableList";
import {  SingleCarStyled } from "../styles/AllStyles";
import { NavLink } from "react-router-dom";
function SingleCarPage({ car }) {
  return (
    <SingleCarStyled>
      {/* <p>Timestamp: {new Date(car.timestamp).toString()}</p> */}
      <div className="image_gallary">
        {car.images &&
          car.images
            .slice(0, 5)
            .map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt=""
                className="corausel_images_sgp"
              />
            ))}
      </div>
      <div className="con_1">
        <div className="con_2">
          <p>Title: {car.title}</p>
          <p>Year: {car.year}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Trim: {car.trim}</p>
          <p>Color: {car.color} </p>
          <p>Interior: {car.interior}</p>
          <p>Interior Color: {car.interiorColor}</p>
          <p>Body Type: {car.bodyType}</p>
          <p>Fuel Type: {car.fuelType}</p>
          <p>Cylinder: {car.cylinder}</p>
          <p>Drive Train: {car.driveTrain}</p>
          <p>Transmission: {car.Transmission}</p>
          <p>VIN: {car.vin}</p>
          <p>Engine: {car.engine}</p>
          <p>Mileage: {car.mileage}</p>
          <p>Stock: {car.stock}</p>
        </div>
        <div className="con_3">
          <NavLink to={`/contact`}>
            <div className="btn_xt"> Have any Query?</div>
          </NavLink>
          <NavLink to={`/contact`}>
            <div className="btn_xt"> Contact us</div>
          </NavLink>
          <div className="con_5">
            <div className="con_6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13776.247037275216!2d-97.77334019999999!3d30.320761100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cac7ee429207%3A0xf6ed5dc92fba8803!2sMt%20Bonnell!5e0!3m2!1sen!2sin!4v1688669192285!5m2!1sen!2sin"
                className="map-cont"
                title="fjkhlkjasdf"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="con_7"></div>
          </div>
        </div>
      </div>
      <div>
        <CollapsibleList
          specific={car.spec1}
          title={"  Convenience Features "}
        />
        <CollapsibleList
          specific={car.spec2}
          title={"  Suspension/Handling "}
        />
        <CollapsibleList
          specific={car.spec3}
          title={"  Entertainment Features "}
        />
        <CollapsibleList specific={car.spec4} title={"  Seats And Trim "} />
        <CollapsibleList specific={car.spec5} title={"  Powertrain "} />
        <CollapsibleList
          specific={car.spec6}
          title={"  Off-Road Capability "}
        />
        <CollapsibleList specific={car.spec7} title={"  Body Exterior "} />
        <CollapsibleList
          specific={car.spec8}
          title={"  Specs And Dimensions "}
        />
        <CollapsibleList
          specific={car.spec9}
          title={"  Lighting, Visibility And Instrumentation "}
        />
        <CollapsibleList
          specific={car.spec10}
          title={"  Safety And Security "}
        />
      </div>
    </SingleCarStyled>
  );
}
export default SingleCarPage;
