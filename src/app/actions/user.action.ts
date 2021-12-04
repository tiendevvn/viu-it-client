// types
import { VIUThunk } from "@/app/types/viu.type";
import { UserActionTypes } from "@/app/types/user.type";

// utils
import httpRequest from "@/app/utils/httpRequest";

export const setUserData = (): VIUThunk => async dispatch => {
  const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN || "");

  if (token) {
    const { data } = await httpRequest.post("/api/auth/refreshtoken", null, {
      showSpinner: true,
    });
    dispatch({
      type: UserActionTypes.SET_USER_DATA,
      payload: {
        isLogged: true,
        isCorrectToken: true,
        token: data.token,
        profile: data.profile,
      },
    });
  }
};
