import { Types } from "../Types";
const herokuDatabseURL = "https://intense-mountain-98124.herokuapp.com";

export const getBooks = () => dispatch => {
  const requestOptions = {
    method: "GET",
    headers: { "Content- Type": "application/json" }
  };

  fetch(herokuDatabseURL + "/getManyBooks", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.GETBOOKS,
        payload: data
      });
    });
};

export const getSingleBook = bookId => dispatch => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  fetch(herokuDatabseURL + "/getSingleBook/" + bookId)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: Types.GETONEBOOK,
        payload: data
      })
    );
};

export const postNewBook = bookData => dispatch => {
  const requestOptions = {
    method: "POST",
    headers: { "Content- Type": "application/json" },
    body: JSON.stringify({ book: bookData })
  };

  fetch(herokuDatabseURL + "/getManyBooks", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.POSTNEWBOOK,
        payload: data
      });
    });
};
