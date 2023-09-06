import React, { useState, useEffect } from "react";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "./ViewerImage.css"; // Import your CSS styles for fullscreen
const ViewerImage = ({ car }) => {
  const [fullscreen, setFullscreen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  const handleImageClick = (index) => {
    if (!fullscreen) {
      // setCurrentImageIndex(index);
      toggleFullscreen();
    }
  };
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden"; // Disable body scrolling in fullscreen mode
    } else {
      document.body.style.overflow = "auto"; // Enable body scrolling when exiting fullscreen
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure body scrolling is enabled when component unmounts
    };
  }, [fullscreen]);
  const centerSlidePercentage = fullscreen ? 60 : 40; // Adjust the centerSlidePercentage based on fullscreen
  return (
    <div className={`viewer-image ${fullscreen ? "fullscreen" : ""}`}>
      <Carousel
        swipeable={true}
        infiniteLoop={true}
        showThumbs={fullscreen}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerSlidePercentage={centerSlidePercentage}
        centerMode={true}
        showIndicators={false}
      >
        {car.images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)} // Handle click to enter fullscreen
          >
            <img
              className={`${
                fullscreen ? "fullscreen_about_car" : "about_car_img"
              }`}
              src={image}
              alt={`Imagfe ${index}`}
            />
          </div>
        ))}
      </Carousel>
      <div className="fullscreen-toggle" onClick={toggleFullscreen}>
        {fullscreen ? <BsFullscreenExit /> : <BsArrowsFullscreen />}
      </div>
    </div>
  );
};
export default ViewerImage;
