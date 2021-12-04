import axios, { AxiosRequestConfig, AxiosError } from "axios";

// actions
import { setLoading } from "@/app/actions/app.action";

export type Config = AxiosRequestConfig & {
  showSpinner?: boolean;
};

type AxiosResponse = AxiosError & {
  config: {
    showSpinner?: boolean;
  };
};

function getAccessToken() {
  const accessToken = window.localStorage.getItem(
    process.env.REACT_APP_ACCESS_TOKEN || ""
  );
  return accessToken;
}

const requestConfig: Config = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
  withCredentials: true,
};

axios.defaults.withCredentials = true;
export const axiosInstance = axios.create(requestConfig);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function initRequest(store: any) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config: Config) => {
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      // add x-auth-token
      const accessToken = getAccessToken();
      if (accessToken && config.headers) {
        config.headers["x-auth-token"] = accessToken;
      }

      return config;
    },
    (error: AxiosResponse) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (res: any) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error: AxiosResponse) => {
      if (
        (error && error.config.showSpinner) ||
        error.code === "ECONNABORTED"
      ) {
        decreaseRequestCount();
      }

      // handle request timeout
      if (error.code === "ECONNABORTED") {
        store.dispatch(setLoading(false));
      }

      // handle errors
      switch (error.response?.status) {
        case 400: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
}
