import { createContext, useContext, useEffect, useReducer } from "react";
import { getCarData } from "../MyFirebaseConfig";
// import axios from "axios";
import MyProductReducer from "../reducer/MyProductReducer";
const MyProductsContext = createContext();
const initialState = {
  color: [],
  cars: [],
  model: [],
  make: [],
  year: [],
  gridView: false,
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
      const cars = await getCarData();
      console.log("pfpro", cars);
      try {
        dispatch({ type: "SET_FILTER_DATA", payload: cars });
      } catch (error) {
        dispatch({ type: "API_ERROR" });
      }
    };
    fetchData();
  }, []);
    const handleView = (viewType) => {
      setView(viewType);
    };
  return (
    <MyProductsContext.Provider value={{ ...state, handleView }}>
      {children}
    </MyProductsContext.Provider>
  );
};
// custom hooks
const useMyProductContext = () => {
  return useContext(MyProductsContext);
};
export { MyProductsProvider, useMyProductContext };
