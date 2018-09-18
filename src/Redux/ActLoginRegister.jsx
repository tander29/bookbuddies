import { Types } from './Types.jsx'
import { push } from 'connected-react-router'

export const login = (username, password) => dispatch => {
    console.log(username, password)

    const postRequestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    }

    //fetch to back end

    dispatch(push('/bookbuddy/profile'))

}