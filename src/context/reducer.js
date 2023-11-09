import { parseToken, toggleStorage } from "../utils";
import appContextActions from "./actions";

export const initialState = {
  isUserAuthenticated: localStorage.getItem("accessToken") ? true : false,
  user: {},
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      toggleStorage(actions.payload);
      const user = parseToken(actions.payload);
      return { ...state, isUserAuthenticated: true, user };
    }
    case appContextActions.signOut: {
      toggleStorage();
      return { ...state, isUserAuthenticated: false, user: {} };
    }

    default:
      return state;
  }
};
