import React from 'react'
import { useMyFilterContext } from '../myhelper_r/context/MyFilterContext';

const ViewInvPage = () => {
  const { gridview} = useMyFilterContext();
  
  return (
    <div>
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
    </div>
  );
}

export default ViewInvPage;