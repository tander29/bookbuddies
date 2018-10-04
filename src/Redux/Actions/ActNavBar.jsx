import { Types } from "../Types";
import { push } from "connected-react-router";

export const to_profile = () => dispatch => {
  dispatch({
    type: Types.TO_PROFILE
  });
  dispatch(push("/bookbuddies/profile"));
};

export const to_main = () => dispatch => {
  dispatch({
    type: Types.TO_MAIN
  });
  dispatch(push("/bookbuddies/main"));
};
