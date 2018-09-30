import { Types } from "./Types";

const initialState = {
  userInfo: {
    username: null,
    displayname: null,
    id: null,
    accountCreated: null,
    about: "",
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

  allUsers: [],

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
          displayname: action.displayname,
          id: action.id,
          loginSuccess: action.success
        }
      };

    case Types.REGISTER:
      return {
        ...state
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

    case Types.PATCHINFO:
      return {
        ...state,
        userInfo: {
          username: action.payload.username,
          displayname: action.payload.displayname,
          about: action.payload.about
        }
      };
    case Types.GETALLUSERS:
      return {
        ...state,
        allUsers: action.payload.users
      };

    default:
      return state;
  }
}
