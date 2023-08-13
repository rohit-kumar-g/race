import React from "react";
// import { CardGridStyled } from "./styles/AllStyles";
import { CardGridStyled } from "../styles/AllStyles";
import { NavLink } from "react-router-dom";
function CardGrid({ car, index }) {
  return (
    <CardGridStyled>
      <div className="con_1" key={index}>
        <div className="img_con">
          <img className="centered-image" src={car.frontimages} alt="" />
        </div>
        <div className="data_cont">
          <div>
            <h3 className="con_title"> {car.title} </h3>
          </div>
          <div className="info_con">
            <div className="info_data"> {car.mileage} mi.</div>
            <div className="info_data"> {car.engine}Eng.</div>
            <div className="info_data"> {car.transmission}</div>
          </div>
          <div className="price-com-cont">
            <div className="info_data price_tag">
              {"$ "}
              {car.price}{" "}
            </div>
            <div className="compare">
              <input className="checkbox_compare" type="checkbox" /> Compare
            </div>
          </div>
          <NavLink to={`/car/${car.id}`}>
            <div className="btn_xt"> View Offer</div>
          </NavLink>
        </div>
      </div>
    </CardGridStyled>
  );
}
export default CardGrid;
