import { Types } from './Types.jsx'
import { push } from 'connected-react-router'

const herokuDatabseURL = "https://warm-bastion-90430.herokuapp.com"
const test = "https://whispering-cliffs-11189.herokuapp.com"
const local = "http://127.0.0.1:8000"

export const login = (username, password) => dispatch => {
    console.log('login action', 'username', username, 'password:', password)

    const postRequestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }

    //fetch to back end

    fetch("http://localhost:8000" + "/authorize/login", postRequestOptions)
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