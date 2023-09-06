import React, { useState } from "react";
import CollapsibleList from "./CardCollapsableList";
import { SingleCarStyled } from "../styles/AllStyles";
import { NavLink } from "react-router-dom";
import ViewerVideo from "./ViewerVideo";
import Viewerimage from "./ViewerImage";
function SingleCarPage({ car }) {
  // const fullscreenRef = useRef(null);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const handleGalleryChange = (isVideo) => {
    setIsVideoMode(isVideo);
  };
  return (
    <SingleCarStyled>
      {/* <p>Timestamp: {new Date(car.timestamp).toString()}</p> */}
      <div>
        <div>
          {isVideoMode ? (
            <div
              className="chg_gall"
              onClick={() => handleGalleryChange(false)}
            >
              Gallary
            </div>
          ) : (
            <div className="chg_gall" onClick={() => handleGalleryChange(true)}>
              Videos
            </div>
          )}
        </div>
        <div>
          {isVideoMode ? <ViewerVideo car={car} /> : <Viewerimage car={car} />}
        </div>
      </div>
      <div className="con_1">
        <div className="con_2">
          {car.title && <p>Title: {car.title}</p>}
          {car.year && <p>Year: {car.year}</p>}
          {car.make && <p>Make: {car.make}</p>}
          {car.model && <p>Model: {car.model}</p>}
          {car.trim && <p>Trim: {car.trim}</p>}
          {car.exteriorColor && <p>Color: {car.exteriorColor} </p>}
          {car.interiorColor && <p>Interior Color: {car.interiorColor}</p>}
          {car.interior && <p>Interior: {car.interior}</p>}
          {car.bodyType && <p>Body Type: {car.bodyType}</p>}
          {car.fuelType && <p>Fuel Type: {car.fuelType}</p>}
          {car.fuelEconomy && <p>Fuel Economy: {car.fuelEconomy}</p>}
          {car.cylinder && <p>Cylinder: {car.cylinder}</p>}
          {car.driveTrain && <p>Drive Train: {car.driveTrain}</p>}
          {car.transmission && <p>Transmission: {car.transmission}</p>}
          {car.vin && <p>VIN: {car.vin}</p>}
          {car.engine && <p>Engine: {car.engine}</p>}
          {car.mileage && <p>Mileage: {car.mileage}</p>}
          {car.stock && <p>Stock: {car.stock}</p>}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.6601529279695!2d-95.55685135714332!3d29.674468903205163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c17ca66b2f%3A0xd80b2e9ad76d2964!2sRace%20Motors!5e0!3m2!1sen!2sin!4v1693980182028!5m2!1sen!2sin"
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
