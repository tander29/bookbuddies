import { Types, heroku, local } from "../Types";

export const sendMessage = messageItem => dispatch => {
  console.log("Action Message Sent:", messageItem);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: messageItem,
      text: messageItem.text,
      touserid: 4,
      fromuserid: 1
    })
  };

  fetch(heroku + "/message", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log("return the send a message", data);
      dispatch({
        type: Types.NEW_MESSAGE,
        message: messageItem
      });
    });
};

export const getAllMessages = () => dispatch => {
  console.log("get all messages called");
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
