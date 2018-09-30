import { Types, heroku, local } from "../Types";
import { push } from "connected-react-router";
import { getAllBooks } from "./ActBooks";
import { getAllMessages } from "./ActSendMessage";

export const login = (username, password) => dispatch => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };

  fetch(heroku + "/authorize/login", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("data from login", data);
      if (data.success) {
        dispatch({
          type: Types.LOGIN,
          username: username,
          password: password,
          id: data.id,
          success: data.success,
          displayname: data.displayname
        });
        dispatch(getAllBooks());
        dispatch(getAllMessages());
        dispatch(getAllUsers());
        dispatch(push("/bookbuddy/profile"));
      }
    });
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

  fetch(heroku + "/authorize/register", requestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.REGISTER,
        payload: data
      });
    });
};

export const getAllUsers = () => dispatch => {
  fetch(heroku + "/User")
    .then(res => res.json())
    .then(data => {
      console.log("all user", data);
    });
};

export const patchInfo = (username, password, about) => dispatch => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      about: about,
      id: 1
    })
  };

  console.log("request options:", requestOptions);
  fetch(heroku + "/User", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("data received from backend:", data);
      dispatch({
        type: Types.REGISTER,
        payload: data
      });
    });
};
