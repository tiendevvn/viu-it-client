// types
import { AppState, AppActions, AppActionTypes } from "@/app/types/app.type";

const initialState: AppState = {
  isLoading: false,
  success: null,
  error: null,
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
    case AppActionTypes.TOAST_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
      };
    case AppActionTypes.TOAST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
