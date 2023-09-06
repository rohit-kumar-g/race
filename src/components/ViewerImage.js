import React, { useState, useEffect } from "react";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "./ViewerImage.css";
import "lightgallery.js/dist/css/lightgallery.css";
const ViewerImage = ({ car }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullscreen]);
  // const centerSlidePercentage = fullscreen ? 60 : 40;
  const [visible, setVisible] = useState(true);
  return (
    <div className={`viewer-image ${fullscreen ? "fullscreen" : ""}`}>
      <div className="content">
        <LightgalleryProvider>
          <Carousel
            swipeable={true}
            infiniteLoop={true}
            showThumbs={fullscreen}
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
