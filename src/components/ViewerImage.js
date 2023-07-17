import React, { useState, useRef, useEffect } from "react";
import { ViewerImageStyled } from "../styles/AllStyles";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
const ViewerImage = ({ car }) => {
  const fullscreenRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const goFullScreen = () => {
    const elem = fullscreenRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    // setIsFullScreen(false);
  };
  const handleFullScreenChange = () => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    setIsFullScreen(!!fullscreenElement);
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange, {
      passive: true,
    });
    document.addEventListener("mozfullscreenchange", handleFullScreenChange, {
      passive: true,
    });
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullScreenChange,
      { passive: true }
    );
    document.addEventListener("msfullscreenchange", handleFullScreenChange, {
      passive: true,
    });
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);
  useEffect(() => {
    const imageGalleryContainer = document.querySelector(
      ".image_gallary_container"
    );
    const touchMoveHandler = (e) => {
      e.stopPropagation();
    };
    if (imageGalleryContainer) {
      imageGalleryContainer.addEventListener("touchmove", touchMoveHandler, {
        passive: false,
      });
    }
    return () => {
      if (imageGalleryContainer) {
        imageGalleryContainer.removeEventListener(
          "touchmove",
          touchMoveHandler
        );
      }
    };
  }, []);
  return (
    <ViewerImageStyled>
      <div
        ref={fullscreenRef}
        className={isFullScreen ? "fullscreen_viewer" : ""}
      >
        <div className="image_gallary_container">
          {car.images &&
            car.images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt=""
                className="image_gallary_item"
              />
            ))}
        </div>
        <div className="bottom_btn">
          <div></div>
          {isFullScreen ? (
            <BsFullscreenExit onClick={exitFullScreen} />
          ) : (
            <BsArrowsFullscreen onClick={goFullScreen} />
          )}
        </div>
      </div>
    </ViewerImageStyled>
  );
};
export default ViewerImage;
