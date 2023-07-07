import React, { useState } from "react";
import { MultiSelectDropdownStyled } from "../styles/AllStyles";
const MultiSelectfilter = ({ filter_title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleSelectAll = () => {
    setSelectedOptions(options);
    onChange(selectedOptions);
  };
  const handleClearSelection = () => {
    setSelectedOptions([]);
    onChange(selectedOptions);
  };
  //   const handleApplySelection = () => {
  //     onChange(selectedOptions);
  //     setIsOpen(false);
  //   };
  console.log("dsfsdafgsdf", options);
  return (
    <MultiSelectDropdownStyled>
      <div className="multi_select_filter">
        <div className="filter_header" onClick={handleToggle}>
          {filter_title} {isOpen ? "▼" : "▶"}({selectedOptions.length})
        </div>
        {isOpen && (
          <div className="filter_content">
            <div className="options">
              {options?.map((option) => (
                <div
                  key={option}
                  className={`option ${
                    selectedOptions.includes(option) ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="filter_actions">
              <button onClick={handleSelectAll}>Select All</button>
              <button onClick={handleClearSelection}>Clear Selection</button>
            </div>
          </div>
        )}
        {/* <button onClick={handleApplySelection}>Apply</button> */}
      </div>
    </MultiSelectDropdownStyled>
  );
};
export default MultiSelectfilter;
