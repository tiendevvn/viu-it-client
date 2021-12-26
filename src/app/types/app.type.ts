export interface AppState {
  isLoading: boolean;
  isShowModal: boolean;
  success: string | null;
  error: string | null;
}

export enum AppActionTypes {
  SET_LOADING = "app/SET_LOADING",
  SET_MODAL = "app/SET_MODAL",
  TOAST_SUCCESS = "app/TOAST_SUCCESS",
  TOAST_FAILURE = "app/TOAST_FAILURE",
}

export interface SetLoading {
  type: typeof AppActionTypes.SET_LOADING;
  payload: { isLoading: boolean };
}

export interface SetModal {
  type: typeof AppActionTypes.SET_MODAL;
  payload: { isShowModal: boolean };
}

export interface ToastSuccess {
  type: typeof AppActionTypes.TOAST_SUCCESS;
  payload: { success: string };
}

export interface ToastFailure {
  type: typeof AppActionTypes.TOAST_FAILURE;
  payload: { error: string };
}

export type AppActions = SetLoading | SetModal | ToastSuccess | ToastFailure;
