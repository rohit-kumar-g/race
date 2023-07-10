import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
const ViewInvMenu = () => {
  const { totalItems ,setFilterView, grid_view , setGridView, setListView } = useMyProductContext();
  console.log("view", setListView);
  return (
    <div>
      <div className="sorting-list--grid">
        <h3 className="">{totalItems}&nbsp;Vehicles</h3>
        <button
          className={
            grid_view ? "view_toggle btn_icon_iv" : "btn_icon_iv"
          }
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={
            grid_view ? "btn_icon_iv" : "view_toggle btn_icon_iv"
          }
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
        <button className="filter_icon" onClick={setFilterView}>
          <FaFilter className=" icon  " />
        </button>
      </div>
    </div>
  );
};
export default ViewInvMenu;
