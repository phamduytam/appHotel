import axios from 'axios';
import { spinnerService } from './spinner.service';
import { storageService } from "./storage.service";
import store from '../store/store';

const instance = axios.create({
    baseURL: 'https://hotelbenluc.com/frontend/admin/api/v1/',
    // baseURL: 'http://localhost:8000/admin/api/v1/',
    headers: {
        'Content-type': 'application/json'
    }
});

instance.interceptors.request.use(async config => {
    // Do something before request is sent
    spinnerService.requestStarted();
    const data = await storageService.getData('user').then(data => {
      return data;
    });

    if (data) {
      config.headers = {
        'Authorization': `Bearer ${data.access_token}`,
        };
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    spinnerService.requestEnded();
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401) {
      store.dispatch({
          type: 'LOGOUT',
          payload: error,
      });
    }
    return Promise.reject(error);
  });

export default instance;