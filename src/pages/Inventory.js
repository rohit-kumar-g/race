import React from "react";
import "./Pagination.css";
import ListViewCar from "../components/ViewList";
import { InventoryStyled } from "../styles/AllStyles";
import ProductFilter from "../components/ViewProductFilter";
import GridViewCar from "../components/ViewGrid";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
import ViewInvMenu from "../components/ViewInvMenu";
import { useMyFilterContext } from "../myhelper_r/context/MyFilterContext";
const CarList = () => {
  const {
    isLoading,
    isError,
    grid_view,
    filter_view,
    // cars,
    color,
    make,
    model,
    year,
  } = useMyProductContext();
  const {
    currentPage,
    totalPages,
    documents,
    goToPage,
    goToPreviousPage,
    goToNextPage,
  } = useMyFilterContext();
  // console.log("isll", grid_view);
  // console.log("iser", filter_view);
  return (
    <InventoryStyled>
      <div className="all_inv_items">
        <div
          className={
            filter_view
              ? "inv_veh_filter_menu active_filters"
              : "inv_veh_filter_menu"
          }
        >
          <ProductFilter color={color} year={year} make={make} model={model} />
        </div>
        <div className="inv_Menu_List_OR_Grid">
          <ViewInvMenu />
          <div className={isLoading || isError ? "loading_bg" : ""}></div>
          <div className="toggle_option">
            {grid_view ? (
              <GridViewCar cars={documents} />
            ) : (
              <ListViewCar cars={documents} />
            )}
          </div>
        </div>
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </InventoryStyled>
  );
};
export default CarList;
