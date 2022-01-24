import {
  FETCH_USER,
  LOG_OUT,
  START_FETCH_USER,
} from "../actions/types/UserType";
const userLocal = localStorage.getItem("user");
const initState = {
  user: userLocal ? JSON.parse(userLocal) : userLocal,
  isLoading: false,
  message: "",
  accessToken: localStorage.getItem("accessToken"),
};

export const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCH_USER: {
      return { ...state, isLoading: true, message: "" };
    }
    case FETCH_USER: {
      const { succcess, message } = action.response;
      if (succcess) {
        const { user } = action.response;
        const { accessToken, ...other } = user;
        localStorage.setItem("user", JSON.stringify(other));
        localStorage.setItem("accessToken", accessToken);
        return {
          ...state,
          isLoading: false,
          user: other,
          accessToken: accessToken,
        };
      }
      return { ...state, isLoading: false, message: message };
    }
    case LOG_OUT: {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      return {
        user: null,
        isLoading: false,
        message: "",
        accessToken: "",
      };
    }
    default:
      return { ...state, error: "Khong ton tai action", isLoading: false };
  }
};
