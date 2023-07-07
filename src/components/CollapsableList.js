import React, { useState } from "react";
import { MdArrowDropDownCircle, MdArrowCircleRight } from "react-icons/md";
const CollapsibleList = ({ title, specific, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="title_spec" onClick={toggleList}>
        {isOpen ? <MdArrowCircleRight /> : <MdArrowDropDownCircle  />}
      {title}
        </div>
      {isOpen && (
         <ul key={index} style={{ columnCount: "2" }}>
          {specific &&
            specific.map((spec, index2) => <li className="spec-item" key={index2}>{spec}</li>)}
        </ul>
      )}
    </div>
  );
};
export default CollapsibleList;
