import {
    Types
} from './Types'



const initialState = {
    messages: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case Types.LOGIN:
            return { ...state }

        default:
            return state
    }
}