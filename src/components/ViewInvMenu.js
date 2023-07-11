import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
import { useMyFilterContext } from "../myhelper_r/context/MyFilterContext";
const ViewInvMenu = () => {
  const { totalItems, setFilterView, grid_view, setGridView, setListView } =
    useMyProductContext();
  const { filtered_items } = useMyFilterContext();
  // console.log("view", setListView);
  return (
    <div>
      <div className="sorting-list--grid">
        <h3 className="">
          {filtered_items}
          {" / "}
          {totalItems}&nbsp;Vehicles
        </h3>
        <button
          className={grid_view ? "view_toggle btn_icon_iv" : "btn_icon_iv"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "btn_icon_iv" : "view_toggle btn_icon_iv"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
        <button className="filter_icon btn_icon_iv" onClick={setFilterView}>
          <BiFilterAlt className=" icon  " />
        </button>
      </div>
    </div>
  );
};
export default ViewInvMenu;
