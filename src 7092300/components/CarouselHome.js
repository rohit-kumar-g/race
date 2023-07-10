import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function CarouselHome() {
  return (
    <div className="cont_carousell">
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {/* <div className="img-carousel">
        <img
          src="./images/car.jpg"
          alt=""
        />
      </div> */}
      <div >
        <img
          className="img-carousel"
          src="./images/1.jpg"
          alt=""
        />
      </div>
      <div >
        <img
          className="img-carousel"
          src="./images/2.jpg"
          alt=""
        />
      </div>
      <div >
        <img
          className="img-carousel"
          src="./images/3.jpg"
          alt=""
        />
      </div>
      <div >
        <img
          className="img-carousel"
          src="./images/4.jpg"
          alt=""
        />
      </div>
    </Carousel>
    </div>
  );
}
export default CarouselHome;
