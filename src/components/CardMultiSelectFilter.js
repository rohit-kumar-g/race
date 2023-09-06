import React from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { MultiSelectDropdownStyled } from "../styles/AllStyles";
import { useMyFilterContext } from "../myhelper_r/context/MyFilterContext";
const MultiSelectfilter = ({ fieldName, filter_title, options }) => {
  const {
    selectedOptions,
    handleOptionClick,
    handleSelectAll,
    handleClearSelection,
    isOpen,
    handleToggle,
  } = useMyFilterContext();
  // useEffect(() => {
  //   // console.log(selectedOptions);
  // }, [selectedOptions]);
  const selectedOptionsForField = selectedOptions[fieldName] || [];
  return (
    <MultiSelectDropdownStyled>
      <div className="multi_select_filter">
        <div className="filter_header" onClick={() => handleToggle(fieldName)}>
          <div>{filter_title}</div>
          <div>{isOpen[fieldName] ? <FaAngleUp /> : <FaAngleRight />}</div>
        </div>
        {isOpen[fieldName] && (
          <div className="filter_content">
            <div className="options">
              {options?.map((option) => (
                <div
                  key={option}
                  className={`option ${
                    selectedOptionsForField.includes(option) ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option, fieldName)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="filter_actions">
              <button onClick={() => handleSelectAll(options, fieldName)}>
                Select All
              </button>
              <button onClick={() => handleClearSelection(fieldName)}>
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </MultiSelectDropdownStyled>
  );
};
export default MultiSelectfilter;
