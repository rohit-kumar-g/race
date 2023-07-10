import React from "react";
import CarouselHome from "../components/CarouselHome";
import ViewSlideGrid from "../components/ViewSlideGrid";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
const Home = () => {
  const { cars} = useMyProductContext();
  return (
    <>
      <CarouselHome />
      <ViewSlideGrid  cars={cars}/>
    </>
  );
};
export default Home;
