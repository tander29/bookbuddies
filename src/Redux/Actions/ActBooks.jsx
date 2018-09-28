import { Types, heroku } from "../Types";

export const getBooks = () => dispatch => {
  const requestOptions = {
    method: "GET",
    headers: { "Content- Type": "application/json" }
  };

  fetch(heroku + "/getManyBooks", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.GETBOOKS,
        payload: data
      });
    });
};

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

export const addNewBook = bookData => dispatch => {
  console.log("sending this data", bookData.title, bookData.author, heroku);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...bookData, userId: 4 })
  };

  fetch(heroku + "/books", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("data I receive back", data);
    });
};

export const getAllBooks = book => dispatch => {
  console.log("sending this data", book);

  fetch(heroku + "/books")
    .then(res => res.json())
    .then(data => {
      console.log("data I receive back", data);
      // dispatch({
      //   type: Types.POSTNEWBOOK,
      //   payload: data
      // });
    });
};

export const googleBook = bookTitle => dispatch => {
  const bookTitleURL = bookTitle.split(" ").join("+");
  const googleURL = "https://www.googleapis.com/books/v1/volumes?q=";

  fetch(googleURL + bookTitleURL)
    .then(res => res.json())
    .then(data => {
      console.log("google API data", data);
    });
};
