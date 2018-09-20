import {
    Types
} from './Types'



const initialState = {

    username:null,
    password:null,
    messages: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case Types.LOGIN:
            return { ...state,
            
            username: action.username,
            password: action.password
        }

        default:
            return state
    }
}