import { Types } from "../Types";
import { push } from "connected-react-router";

const herokuDatabseURL = "https://intense-mountain-98124.herokuapp.com";

export const login = (username, password) => dispatch => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };

  fetch("http://localhost:8000" + "/authorize/login", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.LOGIN,
        username: username,
        password: password
      });
    });
  dispatch(push("/bookbuddy/profile"));
};

export const register = (displayname, username, password) => dispatch => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      displayname: displayname,
      username: username,
      password: password
    })
  };

  fetch(herokuDatabseURL + "/register", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.REGISTER,
        payload: data
      });
    });
};

export const test = () => dispatch => {
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+chamber";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
};
