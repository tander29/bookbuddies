import { Types } from "../Types"

export const sendMessage = (messageItem) => dispatch => {

    console.log("Action Message Sent:", messageItem)
    const requestOptions = {
        method: "POST",
        headers: { "Application-Type": "application/json" },
        body: { message: messageItem }
    }
}