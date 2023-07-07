import React from "react";
import { ProductFilterStyled } from "../styles/AllStyles";
import LoanCalc from "../pages/LoanCalc";
import MultiSelectDropdown from "./MultiSelectDropdown";
const ProductFilter = ({ color, year, make, model }) => {
  const handleSelectionChange = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
  };
  return (
    <ProductFilterStyled>
      <div>
        <h2>Filters</h2>
        <MultiSelectDropdown
          filter_title={"Year"}
          options={year}
          onChange={handleSelectionChange}
        />
        <MultiSelectDropdown
          filter_title={"Make"}
          options={make}
          onChange={handleSelectionChange}
        />
        <MultiSelectDropdown
          filter_title={"Model"}
          options={model}
          onChange={handleSelectionChange}
        />
        <MultiSelectDropdown
          filter_title={"Colour"}
          options={color}
          onChange={handleSelectionChange}
        />

        <LoanCalc />
      </div>
    </ProductFilterStyled>
  );
};
export default ProductFilter;
