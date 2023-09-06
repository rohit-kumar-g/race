import { createContext, useContext, useEffect, useReducer } from "react";
import { getCarData } from "../MyFirebaseConfig";
// import axios from "axios";
import MyProductReducer from "../reducer/MyProductReducer";
const MyProductsContext = createContext();
const initialState = {
  exteriorColor: [],
  cars: [],
  model: [],
  make: [],
  year: [],
  totalItems: 0,
  grid_view: false,
  filter_view: false,
  isLoading: true,
  isError: false,
  isSingleLoading: false,
  singleProduct: {},
};
const MyProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MyProductReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const cars = await getCarData();
        if (cars.length < 1) {
          dispatch({ type: "API_ERROR" });
        }
        // console.log("pfpro", cars.length);
        dispatch({ type: "SET_FILTER_DATA", payload: cars });
      } catch (error) {
        // console.log("pfpro", error);
        dispatch({ type: "API_ERROR" });
      }
    };
    fetchData();
  }, []);

  // to set the FILTER view
  const setFilterView = () => {
    const viewType = !state.filter_view;
    return dispatch({ type: "SET_FILTER_VIEW", payload: viewType });
  };
  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  return (
    <MyProductsContext.Provider
      value={{ ...state, setGridView, setListView, setFilterView }}
    >
      {children}
    </MyProductsContext.Provider>
  );
};
// custom hooks
const useMyProductContext = () => {
  return useContext(MyProductsContext);
};
export { MyProductsProvider, useMyProductContext };
