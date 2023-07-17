import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useMyProductContext } from "./MyProductcontext";
const MyFilterContext = createContext();
export const useMyFilterContext = () => useContext(MyFilterContext);
const initialState = {
  selectedOptions: {},
  selectedCompare: {},
  filtered_items: 0,
  isOpen: {},
  currentPage: 1,
  totalPages: 0,
  docPerPg: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_OPTIONS":
      return { ...state, selectedOptions: action.payload };
    case "SET_SELECTED_COMPARE":
      return { ...state, selectedCompare: action.payload };
    case "SET_IS_OPEN":
      return { ...state, isOpen: action.payload };
    case "SET_FILTERED_ITEMS":
      // console.log("SET_FILTERED_ITEMS", action.payload);
      return { ...state, filtered_items: action.payload };
    case "SET_CURRENT_PAGE":
      // console.log("tpCURR", action.payload);
      return { ...state, currentPage: action.payload };
    case "SET_TOTAL_PAGES":
      // console.log("tpAGE", action.payload);
      return { ...state, totalPages: action.payload };
    case "SET_docPerPg":
      return { ...state, docPerPg: action.payload };
    default:
      return state;
  }
};
export const MyFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    selectedOptions,
    selectedCompare,
    filtered_items,
    isOpen,
    currentPage,
    totalPages,
    docPerPg,
  } = state;
  const pageSize = 12;
  const { cars } = useMyProductContext();
  // useEffect(() => {
  //   // const collectionRef = firestore.collection("cars");
  //   // let query = collectionRef.orderBy("timestamp", "desc");
  //   const unsubscribe = ((snapshot) => {
  //     const totalItems = snapshot.size;
  //     const totalPageCount = Math.ceil(totalItems / pageSize);
  //     // Get the docPerPg for the current page
  //     const start = (currentPage - 1) * pageSize;
  //     const end = start + pageSize;
  //     const docs = snapshot.docs.slice(start, end).map((doc) => doc.data());
  //     dispatch({ type: "SET_TOTAL_PAGES", payload: totalPageCount });
  //     dispatch({ type: "SET_docPerPg", payload: docs });
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [currentPage]);
  useEffect(() => {
    const Paginate = () => {
      const totalItems = cars.length;
      const totalPageCount = Math.ceil(totalItems / pageSize);
      // Get the docPerPg for the current page
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      let filteredCars = [...cars]; // Make a copy of the original cars array
      for (const field in selectedOptions) {
        const options = selectedOptions[field];
        if (options && options.length !== 0) {
          filteredCars = filteredCars.filter((car) =>
            options.includes(car[field])
          );
        }
      }
      // console.log(filteredCars,"no");
      dispatch({ type: "SET_FILTERED_ITEMS", payload: filteredCars.length });
      const docs = filteredCars.slice(start, end);
      dispatch({ type: "SET_TOTAL_PAGES", payload: totalPageCount });
      dispatch({ type: "SET_docPerPg", payload: docs });
    };
    Paginate();
  }, [cars, currentPage, selectedOptions]);
  const goToPage = (page) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };
  const goToPreviousPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    dispatch({ type: "SET_CURRENT_PAGE", payload: prevPage });
  };
  const goToNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    dispatch({ type: "SET_CURRENT_PAGE", payload: nextPage });
    // console.log("tpQ", currentPage);
  };
  const handleToggle = (fieldName) => {
    dispatch({
      type: "SET_IS_OPEN",
      payload: { ...isOpen, [fieldName]: !isOpen[fieldName] },
    });
  };
  const handleOptionClick = (option, fieldName) => {
    const updatedOptions = { ...selectedOptions };
    if (updatedOptions[fieldName]) {
      if (updatedOptions[fieldName].includes(option)) {
        updatedOptions[fieldName] = updatedOptions[fieldName].filter(
          (item) => item !== option
        );
      } else {
        updatedOptions[fieldName] = [...updatedOptions[fieldName], option];
      }
    } else {
      updatedOptions[fieldName] = [option];
    }
    dispatch({ type: "SET_SELECTED_OPTIONS", payload: updatedOptions });
  };
  const handleSelectAll = (options, fieldName) => {
    const updatedOptions = { ...selectedOptions };
    updatedOptions[fieldName] = options;
    dispatch({ type: "SET_SELECTED_OPTIONS", payload: updatedOptions });
  };
  const handleClearSelection = (fieldName) => {
    const updatedOptions = { ...selectedOptions };
    updatedOptions[fieldName] = [];
    dispatch({ type: "SET_SELECTED_OPTIONS", payload: updatedOptions });
  };
  const handleCompareClick = (car) => {
    const compareList = { ...selectedCompare };
    if (compareList[car.id]) {
      delete compareList[car.id];
    } else {
      const compareCount = Object.keys(compareList).length;
      if (compareCount < 3) {
        compareList[car.id] = car;
      } else {
        // console.log("You have already selected 3 cars.");
      }
    }
    dispatch({ type: "SET_SELECTED_COMPARE", payload: compareList });
  };
  const contextValue = {
    selectedOptions,
    selectedCompare,
    filtered_items,
    isOpen,
    currentPage,
    totalPages,
    docPerPg,
    goToPage,
    goToPreviousPage,
    goToNextPage,
    handleToggle,
    handleOptionClick,
    handleSelectAll,
    handleClearSelection,
    handleCompareClick,
  };
  return (
    <MyFilterContext.Provider value={contextValue}>
      {children}
    </MyFilterContext.Provider>
  );
};
export const MyFilterConsumer = MyFilterContext.Consumer;
export default MyFilterContext;
