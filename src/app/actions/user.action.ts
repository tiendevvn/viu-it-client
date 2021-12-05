// types
import { VIUThunk } from "@/app/types/viu.type";
import { History } from "@/app/types/common.type";
import { UserActionTypes } from "@/app/types/user.type";

// utils
import httpRequest from "@/app/utils/httpRequest";
import { errorHandler } from "@/app/utils/errorHandler";
import { PATH_NAME } from "@/app/utils/pathName";

// actions
import { toastSuccess, toastFailure } from "@/app/actions/app.action";

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

export const signUp =
  (
    payload: {
      student_id: string;
      name: string;
      email: string;
      phone_number: string;
      birthday: string;
      password: string;
    },
    history: History
  ): VIUThunk =>
  async dispatch => {
    try {
      const { data } = await httpRequest.post("/api/auth/signup", payload, {
        showSpinner: true,
      });

      const { message } = data;

      dispatch({
        type: UserActionTypes.SIGNUP,
      });

      dispatch(toastSuccess(message));

      history.push(PATH_NAME.SIGNIN);
    } catch (error) {
      const message = errorHandler(error);
      dispatch(toastFailure(message));
    }
  };

export const signIn =
  (
    payload: { student_id: string; password: string },
    history: History
  ): VIUThunk =>
  async dispatch => {
    try {
      const { data } = await httpRequest.post("/api/auth/signin", payload, {
        showSpinner: true,
      });

      const { token, message, profile } = data;

      dispatch({
        type: UserActionTypes.SIGNIN,
        payload: {
          isLogged: true,
          token,
          profile,
        },
      });

      dispatch(toastSuccess(message));

      localStorage.setItem(
        process.env.REACT_APP_ACCESS_TOKEN || "accessToken",
        data.token
      );

      history.push(PATH_NAME.HOME);
    } catch (error) {
      const message = errorHandler(error);
      dispatch(toastFailure(message));
    }
  };
