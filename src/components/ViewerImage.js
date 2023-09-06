import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "./ViewerImage.css";
import "lightgallery.js/dist/css/lightgallery.css";
const ViewerImage = ({ car }) => {
  return (
    <div>
      <div className="content">
        <LightgalleryProvider>
          <Carousel
            swipeable={true}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerSlidePercentage={40}
            centerMode={true}
            showIndicators={false}
          >
            {car.images.map((p, idx) => (
              <LightgalleryItem key={idx} group="group2" src={p}>
                <img
                  src={p}
                  alt="Buy Now"
                  style={{
                    aspectRatio: "4/3",
                    maxWidth: "575px",
                    minHeight: "300px",
                    width: "100%",
                  }}
                />
              </LightgalleryItem>
            ))}
          </Carousel>
        </LightgalleryProvider>
      </div>
    </div>
  );
};
export default ViewerImage;
