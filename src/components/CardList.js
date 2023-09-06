import React from "react";
import { CardListStyled } from "../styles/AllStyles";
import { NavLink } from "react-router-dom";
import { useMyFilterContext } from "../myhelper_r/context/MyFilterContext";
const CardList = ({ car, index }) => {
  const { handleCompareClick, errorMessage, setErrorMessage } =
    useMyFilterContext();
  return (
    <CardListStyled>
      <div className="con_1" key={index}>
        <div className="con_2">
          <div className="img_con">
            <NavLink to={`/car/${car.id}`}>
              <img className="centered-image" src={car.frontimages} alt="" />
            </NavLink>
          </div>
          <div className="con_3">
            <NavLink to={`/car/${car.id}`}>
              <div className="con_title">
                {car.title} <hr />
              </div>
            </NavLink>
            <div className="info_con">
              <div className="info_text">
                {car.mileage && (
                  <div className="info_data">{car.mileage} miles</div>
                )}
                {car.fuelType && (
                  <div className="info_data">{car.fuelType}</div>
                )}
                {car.transmission && (
                  <div className="info_data">
                    {car.transmission} transmission
                  </div>
                )}
                {car.engine && (
                  <div className="info_data">{car.engine} Engine</div>
                )}
                {car.driveTrain && (
                  <div className="info_data">{car.driveTrain}</div>
                )}
                {/* {car.stock && <div className="info_data">{car.stock}</div>} */}
                {/* {car.exteriorColor && (
                  <div className="info_data">{car.exteriorColor} Exterior</div>
                )}
                {car.interiorColor && (
                  <div className="info_data">{car.interiorColor} Interior</div>
                )} */}
              </div>
              <div className="btn_con">
                <div className="info_data price_tag">
                  {"$ "}
                  {car.price}{" "}
                </div>
                <div
                  className="compare"
                  onClick={() => handleCompareClick(car)}
                >
                  <input className="checkbox_compare" type="checkbox" /> Compare
                </div>
                {errorMessage && (
                  <div className="popup">
                    <span className="popup-content">{errorMessage}</span>
                    <span
                      className="popup-close"
                      onClick={() => setErrorMessage("")}
                    >
                      &times;
                    </span>
                  </div>
                )}
                <NavLink to={`/car/${car.id}`}>
                  <div className="btn_xt"> View Offer</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardListStyled>
  );
};
export default CardList;
