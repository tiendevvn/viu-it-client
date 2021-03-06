// types
import { UserState, UserActions, UserActionTypes } from "@/app/types/user.type";

const initialState: UserState = {
  token: null,
  isLogged: false,
  profile: null,
  user: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
    case UserActionTypes.SIGNIN:
      return {
        ...state,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    case UserActionTypes.SIGNUP:
      return {
        ...state,
      };
    case UserActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
