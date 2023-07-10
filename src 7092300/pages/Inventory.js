import React, { useState, useEffect } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import ListViewCar from "../components/ViewList";
import { InventoryStyled } from "../styles/AllStyles";
import ProductFilter from "../components/ViewProductFilter";
import GridViewCar from "../components/ViewGrid";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
import ViewInvPage from "../components/ViewInvPage";
const CarList = () => {
  const { isLoading, cars, color, make, model, year } = useMyProductContext();

  console.log("invvvvvv", cars);
  console.log("invvvvvv", isLoading);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 998px)"
    );
    const desktopMediaQuery = window.matchMedia("(min-width: 1000px)");
    const handleMediaQueryChange = () => {
      setIsMobile(mobileMediaQuery.matches);
      setIsTablet(tabletMediaQuery.matches);
      setIsDesktop(desktopMediaQuery.matches);
    };
    handleMediaQueryChange(); // Initial check
    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleMediaQueryChange);
    desktopMediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
      tabletMediaQuery.removeEventListener("change", handleMediaQueryChange);
      desktopMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const [view, setView] = useState("list"); // Initial view set to "grid"
  const handleView = (viewType) => {
    setView(viewType);
  };
  const TabComponent = () => {
    return (
      <div className={isLoading ? "iv_body" : "toggle_view_bar"}>
        <ViewInvPage/>
          <div className="loading_bg"></div>
        <div className="toggle_option">
          {view === "grid" ? (
            <GridViewCar cars={cars} />
          ) : (
            <ListViewCar cars={cars} />
          )}
        </div>
      </div>
    );
  };
  const DesktopComponent = () => {
    return (
      <div className="desktop-view-inventory">
        <TabComponent />
        {/* <GridViewCar cars={cars} /> */}
      </div>
    );
  };
  return (
    <InventoryStyled>
      <div className="all_inv_items">

      <ProductFilter color={color} year={year} make={make} model={model} />
      <div className={isLoading ? "iv_body" : "toggle_view_bar"}>
        <div className="sorting-list--grid">
          <button onClick={() => handleView("grid")}>
            <BsFillGridFill className="icon   " />
          </button>
          <button onClick={() => handleView("list")}>
            <BsList className="icon  " />
          </button>
          <button className="filter_icon" onClick={() => handleView("list")}>
            <FaFilter className=" icon  " />
          </button>
        </div>
        <div className="loading_bg"></div>
        <div className="toggle_option">
          {view === "grid" ? (
            <GridViewCar cars={cars} />
            ) : (
              <ListViewCar cars={cars} />
              )}
        </div>
      </div>
              </div>
    </InventoryStyled>
  );
};
export default CarList;
