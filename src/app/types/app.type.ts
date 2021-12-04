export interface AppState {
  isLoading: boolean;
}

export enum AppActionTypes {
  SET_LOADING = "app/SET_LOADING",
}

export interface SetLoading {
  type: typeof AppActionTypes.SET_LOADING;
  payload: { isLoading: boolean };
}

export type AppActions = SetLoading;
