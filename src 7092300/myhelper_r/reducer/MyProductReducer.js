import { UnqVals4K } from "../MyFirebaseConfig";

const MyProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_FILTER_DATA":
    const color = UnqVals4K(action.payload ,"color");
    const model = UnqVals4K(action.payload ,"model");
    const year = UnqVals4K(action.payload ,"year");
    const make= UnqVals4K(action.payload ,"make");

      return {
        ...state,
        // isLoading: false,
        cars :action.payload,
        color: color,
        model: model,
        year:year,
        make: make,
      };

    case "API_ERROR":
      return {
        ...state,
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
