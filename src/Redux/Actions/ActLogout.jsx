import { Types } from "../Types";
import { push } from "connected-react-router";

export const logout = () => dispatch => {
  dispatch({ type: Types.LOGOUT });
  dispatch(push("/bookbuddies/home"));
};
