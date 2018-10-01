import { Types } from "./Types";

const initialState = {
  userInfo: {
    username: null,
    displayname: null,
    id: null,
    accountCreated: null,
    aboutBio: "",
    loginSuccess: false,
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
        ...state,
        userInfo: {
          username: action.username,
          displayName: action.username,
          id: action.id,
          loginSuccess: action.success
        }
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

    case Types.GET_MESSAGES:
      return {
        ...state,
        allMessages: action.payload.messages
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

    case Types.NEW_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
}
