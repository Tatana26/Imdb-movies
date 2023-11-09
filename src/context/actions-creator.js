import actions from "./actions";

export const signInAction = (payload) => {
  console.log("Dispatching SIGN_IN action with payload:", payload);

  return {
    type: actions.signIn,
    payload,
  };
};

export const signOutAction = () => {
  return {
    type: actions.signOut,
  };
};
