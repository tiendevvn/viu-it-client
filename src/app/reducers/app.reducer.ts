// types
import { AppState, AppActions, AppActionTypes } from "@/app/types/app.type";

const initialState: AppState = {
  isLoading: false,
};

export const appReducer = (
  state: AppState = initialState,
  action: AppActions
): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};
