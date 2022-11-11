import { GET_CATS_LIST } from "../actions/catAction";

let initialState = {
  getCatsList: false,
  errorCatsList: false,
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS_LIST:
      return {
        ...state,
        getCatsList: action.payload.data,
        errorCatsList: action.payload.errorMessage,
      };

    // case POST_CAT_CREATE:
    //   return {
    //     ...state,
    //     getResponDataCat: action.payload.data,
    //     errorResponDataCat: action.payload.errorMessage,
    //   };

    // case PUT_CAT_EDIT:
    //   return {
    //     ...state,
    //     getResponDataUser: action.payload.data,
    //     errorResponDataUser: action.payload.errorMessage,
    //   };

    default:
      return state;
  }
};

export default cats;
