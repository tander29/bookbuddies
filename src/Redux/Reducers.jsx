import {
    Types
} from './Types'



const initialState = {

    username: null,
    password: null,
    messages: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case Types.LOGIN:
            return {
                ...state,

                username: action.username,
                password: action.password
            }

        case Types.REGISTER:
        return {
            ...state,

            displayName: action.displayName,
            username: action.username,
            password: action.password

        }

        case Types.LOGOUT:
            return { ...initialState }

        case Types.GETBOOKS:
            return {
                ...state,
                books: action.payload
            }

        case Types.GETONEBOOK:
            return {
                ...state,
                onebook: action.payload
            }


        default:
            return state
    }
}