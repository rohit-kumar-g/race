import React from "react";
import { SkeletonLoadPgStyled } from "../styles/AllStyles";
const SkeletonLoadPg = () => {
  return (
    <SkeletonLoadPgStyled>
      <div className="skeleton-container">
        <div className="skeleton-image"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
        <div className="article_cont">
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
        </div>
          <div className="skeleton-circle"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
          <div className="skeleton-article"></div>
      </div>
    </SkeletonLoadPgStyled>
  );
};
export default SkeletonLoadPg;
