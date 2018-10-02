import { Types, heroku, local } from "../Types";

export const sendMessage = messageItem => dispatch => {
  console.log("message item", messageItem);
  console.log(messageItem.toUserId);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: messageItem.text,
      touserid: messageItem.toOwnerId,
      fromuserid: messageItem.fromUserId
    })
  };
  console.log("request options", requestOptions);

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
  console.log("messages should be received");
  fetch(heroku + "/message")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: Types.GET_MESSAGES,
        payload: data
      });
      console.log("all messages", data);
    });
};
