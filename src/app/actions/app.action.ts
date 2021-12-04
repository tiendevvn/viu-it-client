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
