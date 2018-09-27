import { Types } from "./Types";

const initialState = {
  userInfo: {
    username: null,
    displayname: null,
    id: null,
    accountCreated: null,
    aboutBio: "",
    loginSucces: false,
    booksOwned: [],
    messages: []
  },

  googleBookAPI: {
    title: null,
    author: null,
    rating: null,
    image: null
  },

  allBooks: [],

  allMessages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state.userInfo,

        username: action.username,
        password: action.password
      };

    case Types.REGISTER:
      return {
        ...state,

        displayName: action.displayName,
        username: action.username,
        password: action.password
      };

    case Types.LOGOUT:
      return { ...initialState };

    case Types.GETBOOKS:
      return {
        ...state,
        books: action.payload
      };

    case Types.GETONEBOOK:
      return {
        ...state,
        onebook: action.payload
      };

    case Types.GOOGLE_BOOK:
      return {
        ...state
      };

    default:
      return state;
  }
}
