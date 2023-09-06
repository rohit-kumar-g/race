import { UnqVals4K } from "../MyFirebaseConfig";
const MyProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "SET_FILTER_VIEW":
      return {
        ...state,
        filter_view: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_FILTER_DATA":
      const exteriorColor = UnqVals4K(action.payload, "exteriorColor");
      const model = UnqVals4K(action.payload, "model");
      const year = UnqVals4K(action.payload, "year");
      const make = UnqVals4K(action.payload, "make");
      return {
        ...state,
        totalItems: action.payload.length,
        isLoading: false,
        cars: action.payload,
        exteriorColor: exteriorColor,
        model: model,
        year: year,
        make: make,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default MyProductReducer;
