import axios from "axios";

export const GET_CATS_LIST = "GET_CATS_LIST";

export const getCatsList = () => {
  return (dispatch) => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then(function (response) {
        dispatch({
          type: GET_CATS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_CATS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};
