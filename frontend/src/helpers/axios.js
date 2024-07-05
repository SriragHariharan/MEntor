import axios from 'axios';


export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const MEntorToken = localStorage.getItem('MEntor_token');
  if (MEntorToken) {
    config.headers.Authorization = `Bearer ${MEntorToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, return it
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("use unauthenticated")
      localStorage.clear()
      window.location.href = '/mentee/login';
    }
    return Promise.reject(error);
  }
);

