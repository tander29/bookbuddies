import { Types, heroku, local } from "../Types";
import { push } from "connected-react-router";
import { getAllBooks } from "./ActBooks";
import { getAllMessages } from "./ActSendMessage";

//login right now is getting lots of info, could make an action called initiate
//initiate could run all of the dispatches
export const login = (username, password) => dispatch => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };

  fetch(heroku + "/authorize/login", requestOptions)
    .then(res => res.json())
    .then(data => {
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
        dispatch(push("/bookbuddy/main"));
      }
      if (!data.success) {
        alert("Error, log in failed");
      }
    });
};

//on register component, register component compares existing users to desired username
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
      alert("Let's find you a Book, Buddy!");
      dispatch(login(username, password));
    });
    dispatch(login(username,password))
};

//get's all users on log in page, front end compares new users on register component, only 1 username unique allowed
export const getAllUsers = () => dispatch => {
  fetch(heroku + "/User")
    .then(res => res.json())
    .then(data => {
      console.log("all user", data);
      dispatch({ type: Types.GETALLUSERS, payload: data });
    });
};

//not being used, but we are able to reach end point and get user by an id number
export const getMyUser = id => dispatch => {
  fetch(heroku + "/User/" + id)
    .then(res => res.json())
    .then(data => {
      console.log("my user", data);
    });
};

export const patchInfo = (username, password, about, id) => dispatch => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      about: about,
      id: id
    })
  };

  console.log("request options:", requestOptions);
  fetch(heroku + "/User", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("data received from backend:", data);
      dispatch({
        type: Types.PATCHINFO,
        payload: data
      });
    });
};
