import { Types, heroku, local } from "../Types";

export const sendMessage = messageItem => dispatch => {
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
      dispatch({
        type: Types.GET_MESSAGES,
        messages: data
      });
    });
};
