import React, { useState } from "react";
import { ViewerVideoStyled } from "../styles/AllStyles";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";
const VideoPlayer = ({ car }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = car.videos || []; // Add your video URLs here
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
  return (
    <ViewerVideoStyled>
      <div className="video-player">
        <div className="video-navigation prev">
          <TbCircleChevronLeft onClick={handlePrevious} />
        </div>
        {videos.length > 0 ? (
          <video
            className="video-element"
            src={videos[currentVideo]}
            controls
            poster={car.frontimages}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="video-element">No videos available.</div>
        )}
        <div className="video-navigation next">
          <TbCircleChevronRight onClick={handleNext} />
        </div>
      </div>
    </ViewerVideoStyled>
  );
};
export default VideoPlayer;
