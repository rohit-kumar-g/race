import React, { useState } from "react";
import { ViewerVideoStyled } from "../styles/AllStyles";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
const VideoPlayer = ({ car }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = car.videos; // Add your video URLs here
  const handlePrevious = () => {
    setCurrentVideo((prevVideo) =>
      prevVideo === 0 ? videos.length - 1 : prevVideo - 1
    );
  };
  const handleNext = () => {
    setCurrentVideo((prevVideo) =>
      prevVideo === videos.length - 1 ? 0 : prevVideo + 1
    );
  };
  // const handleSwipe = (event) => {
  //   const { deltaX } = event;
  //   if (deltaX > 0) {
  //     handlePrevious();
  //   } else if (deltaX < 0) {
  //     handleNext();
  //   }
  // };
  return (
    <ViewerVideoStyled>
      <div className="video-player">
        <button className="video-navigation prev" onClick={handlePrevious}>
          <IoChevronBackOutline />
        </button>
        <video className="video-element" src={videos[currentVideo]} controls>
          Your browser does not support the video tag.
        </video>
        <button className="video-navigation next" onClick={handleNext}>
          <IoChevronForwardOutline />
        </button>
      </div>
    </ViewerVideoStyled>
  );
};
export default VideoPlayer;
