import { Types } from './Types.jsx'
import { push } from 'connected-react-router'

const herokuDatabseURL = "https://warm-bastion-90430.herokuapp.com/"

export const login = (username, password) => dispatch => {
    console.log('login action', 'username', username, 'password:', password)

    const postRequestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    }

    //fetch to back end

    fetch(herokuDatabseURL + "/authorize/login", postRequestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({
            type: Types.LOGIN,
            username: username,
            password: password
        })
    })        
        //then need to navigate to profile or main page with below line
        
        dispatch(push('/bookbuddy/profile'))
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
    
    fetch(herokuDatabseURL + "/authorize", postRequestOptions)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dispatch({
        type: Types.REGISTER,
        username: username,
        password: password
    })

    dispatch(login(username, password))
})        

    //fetch to back end
    //then log in automatically


}