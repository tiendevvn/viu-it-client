// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (error: any) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
