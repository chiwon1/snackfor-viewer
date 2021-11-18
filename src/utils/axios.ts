import axios, { AxiosError, AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  timeout: 4000,
  withCredentials: true,
});

const setResponseInterceptor = () => {
  const parseResponseData = (res: AxiosResponse): AxiosResponse => res.data;

  const handleResponseError = (err: AxiosError) => {
    if (err.response) {
      return err.response?.status < 500
        ? {
            statusCode: err.response?.status,
            message: err.response?.data,
          }
        : {
            statusCode: 500,
            message: 'INTERNAL_SERVER_ERROR',
          };
    }
  };

  axiosInstance.interceptors.response.use(
    parseResponseData,
    handleResponseError,
  );
};

setResponseInterceptor();

export default axiosInstance;
