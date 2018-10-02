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
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...bookData, userId: id })
  };

  fetch(heroku + "/books", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("success added new book", data);
      dispatch(getAllBooks());
      alert(`Thanks for adding ${data.title} by ${data.author} as a listing! `);
      dispatch({ type: Types.RESET_GOOGLE });
    });
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
      dispatch({
        type: Types.GOOGLE_BOOK,
        payload: data
      });
      console.log("google API data", data);
    });
};

export const clearGoogle = () => dispatch => {
  dispatch({ type: Types.RESET_GOOGLE });
};
