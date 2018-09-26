import { Types, heroku } from "../Types";
import { push } from "connected-react-router";

const herokuDatabseURL = "https://warm-bastion-90430.herokuapp.com";

export const logout = () => dispatch => {
  console.log("loggin out");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  dispatch(push("/bookbuddy/home"));
};
