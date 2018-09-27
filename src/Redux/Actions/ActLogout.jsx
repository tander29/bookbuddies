// import { Types, heroku } from "../Types";
import { push } from "connected-react-router";

export const logout = () => dispatch => {
  console.log("loggin out");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  dispatch(push("/bookbuddy/home"));
};
