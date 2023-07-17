import React from "react";
import { SkeletonLoadingStyled } from "../styles/AllStyles";

const SkeletonLoading = () => {

  return (
    <SkeletonLoadingStyled>
      <div className="skeleton-container">
        <div className="skeleton-image"></div>
        <div className="skeleton-lines">
          <div className="skeleton-line firstt"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    </SkeletonLoadingStyled>
  );
};

export default SkeletonLoading;
