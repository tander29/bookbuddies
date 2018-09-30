import { Types, heroku, local } from "../Types";
import { push } from "connected-react-router";
import { getAllBooks } from "./ActBooks";
import { getAllMessages } from "./ActSendMessage";

export const login = (username, password) => dispatch => {
  console.log("attempt", username, password);
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
          success: data.success
        });
        dispatch(getAllBooks());
        dispatch(getAllMessages());
        dispatch(push("/bookbuddy/profile"));
      }
    });
};

export const register = (displayname, username, password) => dispatch => {
  console.log(displayname, username, password);
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
      console.log("data received from backend:", data);
      dispatch({
        type: Types.REGISTER,
        payload: data
      });
    });
};
