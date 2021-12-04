/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from "axios";
import { axiosInstance, Config } from "./initRequest";

class HttpRequest {
  api: AxiosInstance;

  constructor() {
    this.api = axiosInstance;
  }

  async get(url: string, config?: Config) {
    return this.api.get(url, config);
  }

  async post(url: string, data?: any, config?: Config) {
    return this.api.post(url, data, config);
  }

  async put(url: string, data?: any, config?: Config) {
    return this.api.put(url, data, config);
  }

  async patch(url: string, data?: any, config?: Config) {
    return this.api.patch(url, data, config);
  }

  async delete(url: string, config?: Config) {
    return this.api.delete(url, config);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
