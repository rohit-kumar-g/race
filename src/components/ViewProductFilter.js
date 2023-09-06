import React from "react";
import { ProductFilterStyled } from "../styles/AllStyles";
import LoanCalc from "../pages/LoanCalc";
import MultiSelectfilter from "../components/CardMultiSelectFilter";
import { useMyProductContext } from "../myhelper_r/context/MyProductcontext";
const ProductFilter = ({ exteriorColor, year, make, model }) => {
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
          options={year.sort()}
        />
        <MultiSelectfilter
          fieldName={"make"}
          filter_title={"Make"}
          options={make.sort()}
        />
        <MultiSelectfilter
          fieldName={"model"}
          filter_title={"Model"}
          options={model.sort()}
        />
        <MultiSelectfilter
          fieldName={"exteriorColor"}
          filter_title={"Colour"}
          options={exteriorColor.sort()}
        />
        <LoanCalc />
      </div>
    </ProductFilterStyled>
  );
};
export default ProductFilter;
