import { userServices } from "../../services/UserServices";
import { FETCH_USER, START_FETCH_USER } from "./types/UserType";

export const loginAction = (user) => {
  return (dispatch) => {
    dispatch({ type: START_FETCH_USER });
    userServices
      .login(user)
      .then((response) => {
        dispatch({ type: FETCH_USER, response: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
