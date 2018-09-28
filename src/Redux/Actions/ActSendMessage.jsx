import { Types, heroku } from "../Types";

export const sendMessage = messageItem => dispatch => {
  console.log("Action Message Sent:", messageItem);
  const requestOptions = {
    method: "POST",
    headers: { "Application-Type": "application/json" },
    body: { message: messageItem }
  };

  fetch(heroku + "/message", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("send a message", data);
      dispatch({
        type: Types.NEW_MESSAGE,
        message: messageItem
      });
    });
};

export const getAllMessages = () => dispatch => {
  fetch(heroku + "/message")
    .then(res => res.json())
    .then(data => {
      console.log("all messages received", data);
      dispatch({
        type: Types.GET_MESSAGES,
        messages: data
      });
    });
};
