const MyFilterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        set_filters: {
          ...state.set_filters,
          [name]: value,
        },
      };
    default:
      return state;
  }
};
export default MyFilterReducer;
