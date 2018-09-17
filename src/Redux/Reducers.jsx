import {
    Types
} from './Types'



const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {

        case Types.LOGIN:
            return { ...state }

        default:
            return state
    }
}