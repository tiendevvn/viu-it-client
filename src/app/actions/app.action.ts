// types
import { VIUThunk } from "@/app/types/viu.type";
import { AppActionTypes } from "@/app/types/app.type";

export const setLoading =
  (isLoading: boolean): VIUThunk =>
  async dispatch => {
    dispatch({
      type: AppActionTypes.SET_LOADING,
      payload: { isLoading },
    });
  };

export const toastSuccess =
  (message: string | null): VIUThunk =>
  async dispatch => {
    dispatch({
      type: AppActionTypes.TOAST_SUCCESS,
      payload: { success: message },
    });
  };

export const toastFailure =
  (message: string | null): VIUThunk =>
  async dispatch => {
    dispatch({
      type: AppActionTypes.TOAST_FAILURE,
      payload: { error: message },
    });
  };
