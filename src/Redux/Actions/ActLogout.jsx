import { Types } from "../Types";
import { push } from "connected-react-router";

export const logout = () => dispatch => {
  console.log("loggin out");

  dispatch({ type: Types.LOGOUT });
  dispatch(push("/bookbuddy/home"));
};
