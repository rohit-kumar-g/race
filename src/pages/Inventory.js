import React, { useState, useEffect } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {
  DataManagementComponent,
  UnqVals4K,
  getCarData,
} from "../Helper/FirebaseConfig";
import ListViewCar from "../components/ViewList";
import { InventoryStyled } from "../styles/AllStyles";
import ProductFilter from "../components/ProductFilter";
import GridViewCar from "../components/ViewGrid";
const CarList = () => {
  const [cars, setCars] = useState([]);
  const [color, setColor] = useState([]);
  const [model, setModel] = useState([]);
  const [make, setMake] = useState([]);
  const [year, setYear] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const carData = await getCarData();
      setCars(carData);
      setColor(UnqVals4K(carData, "color"));
      setModel(UnqVals4K(carData, "model"));
      setMake(UnqVals4K(carData, "make"));
      setYear(UnqVals4K(carData, "year"));
      setLoading(false);
    };
    fetchData();
  }, []);
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
      <div className="toggle_view_bar">
        <div className="sorting-list--grid">
          <button onClick={() => handleView("grid")}>
            <BsFillGridFill className="icon" />
          </button>
          <button onClick={() => handleView("list")}>
            <BsList className="icon" />
          </button>
        </div>
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
    // useEffect(() => {
    //   const keysss11 = async () => {
    //     const keysss = await UnqVals4K(cars, "color");
    //     console.log(keysss);
    //   };
    //   keysss11();
    // }, []);
    DataManagementComponent();
    return (
      <div className="desktop-view-inventory">
        <ProductFilter color={color} year={year} make={make} model={model} />
        <TabComponent />
        {/* <GridViewCar cars={cars} /> */}
      </div>
    );
  };
  return (
    <InventoryStyled>
      {loading && <div>Loading...</div>}
      {isMobile && <TabComponent />}
      {isTablet && <TabComponent />}
      {isDesktop && <DesktopComponent />}
    </InventoryStyled>
  );
};
export default CarList;
