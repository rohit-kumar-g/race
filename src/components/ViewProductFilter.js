import React from "react";
import { ProductFilterStyled } from "../styles/AllStyles";
import LoanCalc from "../pages/LoanCalc";
import MultiSelectfilter from "../components/CardMultiSelectFilter";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
const ProductFilter = ({ color, year, make, model }) => {
  // const handleSelectionChange = (selectedOptions) => {
  //   // console.log("Selected options:", selectedOptions);
  // };
  const { setFilterView } = useMyProductContext();
  return (
    <ProductFilterStyled>
      <div>
        <div className="close_filter_view" onClick={setFilterView}>
          Done
        </div>
        <h2 className="filter-title">Find Your Car</h2>
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
