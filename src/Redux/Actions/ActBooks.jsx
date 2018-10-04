import { Types, heroku } from "../Types";

export const getSingleBook = bookId => dispatch => {
  fetch(heroku + "/getSingleBook/" + bookId)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: Types.GETONEBOOK,
        payload: data
      })
    );
};

export const addNewBook = (bookData, id) => dispatch => {
  if (!id) {
    alert("error, try loggng out then logging in");
    return;
  }
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...bookData, userId: id })
  };

  fetch(heroku + "/books", requestOptions)
    .then(res => res.json())
    .then(data => {
      alert(`Thanks for adding ${data.title} by ${data.author} as a listing! `);
      dispatch({ type: Types.RESET_GOOGLE });
    });
  dispatch(getAllBooks());
};

export const getAllBooks = book => dispatch => {
  fetch(heroku + "/books")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.GETBOOKS,
        payload: data.book
      });
    });
};

export const googleBook = bookTitle => dispatch => {
  const bookTitleURL = bookTitle.split(" ").join("+");
  const googleURL = "https://www.googleapis.com/books/v1/volumes?q=";

  fetch(googleURL + bookTitleURL)
    .then(res => res.json())
    .then(data => {
      if (data.totalItems > 0) {
        console.log(data);
        dispatch({
          type: Types.GOOGLE_BOOK,
          payload: data
        });
      } else {
        alert("We couldn't find that one, try to adjust your spelling!");
      }
    });
};

export const clearGoogle = () => dispatch => {
  dispatch({ type: Types.RESET_GOOGLE });
};

export const filterBooks = search => dispatch => {
  dispatch({
    type: Types.FILTER_BOOKS,
    search: search
  });
};

export const clearBooks = () => dispatch => {
  dispatch({ type: Types.CLEAR_BOOKS });
};
