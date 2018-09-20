import { Types } from './Types.jsx'
import { push } from 'connected-react-router'

const herokuDatabseURL = "https://intense-mountain-98124.herokuapp.com"

export const login = (username, password) => dispatch => {
    console.log('login action', 'username', username, 'password:', password)

    const postRequestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    }

    //fetch to back end

    fetch(herokuDatabseURL + "/login", postRequestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(push('/bookbuddy/profile'))
        })
    //then need to navigate to profile or main page with below line

}

console.log('update')
// fetch(heroku + "/likes", postLike)
// .then(res => res.json())
// .then(data => {
//   dispatch({
//     type: LIKE,
//     messageId: data.like.messageId
//   })
//   dispatch(getMessages())
// })
// };

export const register = (displayname, username, password) => dispatch => {
    console.log('register action', 'displayname', displayname, 'username', username, 'password:', password)

    const postRequestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayname: displayname, username: username, password: password })
    }

    //fetch to back end
    //then log in automatically


}