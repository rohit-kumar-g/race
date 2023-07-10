import React from "react";
import ListViewCar from "../components/ViewList";
import { InventoryStyled } from "../styles/AllStyles";
import ProductFilter from "../components/ViewProductFilter";
import GridViewCar from "../components/ViewGrid";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
import ViewInvMenu from "../components/ViewInvMenu";
const CarList = () => {
  const { isLoading, isError, grid_view, filter_view, cars, color, make, model, year } =
    useMyProductContext();
  console.log("isll", grid_view);
  console.log("iser", filter_view);
  return (
    <InventoryStyled>
      <div className="all_inv_items">
        <div className={filter_view ? "inv_veh_filter_menu active_filters" : "inv_veh_filter_menu"}>
          <ProductFilter color={color} year={year} make={make} model={model} />
        </div>
        <div className="inv_Menu_List_OR_Grid">
          <ViewInvMenu />
          {(isLoading || isError) && <div className="loading_bg"></div>}
          <div className="toggle_option">
            {grid_view ? (
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
