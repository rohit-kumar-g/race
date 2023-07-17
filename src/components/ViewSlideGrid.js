import React from "react";
import { OverflowCardStyled } from "../styles/AllStyles";
import CardGrid from "./CardGrid";
import { styled } from "styled-components";
import SkeletonLoading from "./LoadingCard";
const ViewSlideGrid = ({ cars }) => {
  return (
    <>
      <Wrapper>Latest Cars</Wrapper>
      <OverflowCardStyled>
        {cars.length < 1 ? (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        ) : (
          cars
            .slice(0, 5)
            .map((car, index) => <CardGrid car={car} key={index} />)
        )}
      </OverflowCardStyled>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* bottom: -2rem; */
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border: 2px solid #fff;
  background: ${({ theme }) => theme.colors.bgnav};
  box-shadow: ${({ theme }) => theme.colors.boxoutshadow};
  margin: 2rem;
  margin-bottom: 0;
  padding: 3rem 3rem 0rem 3rem;
  font-size: 3rem;
`;
export default ViewSlideGrid;
