import React from "react";
import { ProductFilterStyled } from "../styles/AllStyles";
import LoanCalc from "../pages/LoanCalc";
import MultiSelectfilter from "../components/CardMultiSelectFilter";
const ProductFilter = ({ color, year, make, model }) => {
  const handleSelectionChange = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
  };
  return (
    <ProductFilterStyled>
      <div>
        <h2>Filters</h2>
        <MultiSelectfilter
          fieldName={"year"}
          filter_title={"Year"}
          options={year}
        />
        <MultiSelectfilter
          fieldName={"make"}
          filter_title={"Make"}
          options={make}
        />
        <MultiSelectfilter
          fieldName={"model"}
          filter_title={"Model"}
          options={model}
        />
        <MultiSelectfilter
          fieldName={"color"}
          filter_title={"Colour"}
          options={color}
        />
        <LoanCalc />
      </div>
    </ProductFilterStyled>
  );
};
export default ProductFilter;
