import axios from 'axios';
import { Notice } from 'view-design';
import http from '../common/http';
import router from '../router';
var instance = axios.create({
  baseURL: http.baseURL,
  timeout: 30000,
  responseType: 'json',
  validateStatus(status) {
    return status === 200;
  }
});
// 拦截请求
instance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    config.headers = {
      Authorization:
        'Bearer ' +
        's1N8e1PghVvsaClJd8g86N2cspIQjcwkhhxySHoef3AFtFyGHOMSQRZphw4Ydq9dTFYxOyn6cV4mirAdNm5cJS1U93ic_-hnEeYU-A7Tov-Zo3by9QVhCmSLcmnxg93_UUD9z8Y2f5QHiU9Hzh-5icd83s_IAUDjZ9RRjKN7XVQeFmdWlgBHobhs7FgeGt78wCrAgm0tFlOCKFeleI9a3ptQErrXzKOOAB8Wucn1XTmtpMzRRSiHDRt3MPLc4_iX4ky3Kp068AHAkW68r3TZb5CXX-b_tTEpUZWbt4P4ctQ6xXtDycy0RYNlh8SUL27uYctIKO_VEjPElkOnN94eaAm-tUo1ouqBSEVkeyAp3ww'
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errorMessage = '系统内部异常，请联系网站管理员';
    if (error.response) {
      errorMessage =
        error.response.data === null ? '系统内部异常，请联系网站管理员' : error.response.data.error.message;
      switch (error.response.status) {
        case 404:
          Notice.error({
            title: '系统提示',
            desc: '很抱歉，资源未找到',
            duration: 4000
          });
          break;
        case 403:
        case 401:
          Notice.error({
            title: '系统提示',
            desc: errorMessage,
            duration: 4000
          });
          break;
        default:
          Notice.error({
            title: '系统提示',
            desc: errorMessage,
            duration: 4000
          });
          break;
      }
    } else {
      Notice.error({
        title: '系统提示',
        desc: errorMessage,
        duration: 4000
      });
    }
    return Promise.reject(error);
  }
);
const request = {
  post(url, params = {}) {
    return instance.post(url, params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  get(url, params) {
    let _params;
    let _paramsarr = [];
    if (Object.is(params, undefined)) {
      _params = '';
    } else {
      for (let key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null) {
          _paramsarr.push(`${key}=${params[key]}`);
        }
      }
      _paramsarr.length === 0 ? (_params = '') : (_params = '?' + _paramsarr.join('&'));
    }
    return instance.get(`${url}${_params}`);
  },
  postJSON(url, params) {
    return instance.post(url, params, {
      transformRequest: [
        (params) => {
          let result = '';
          Object.keys(params).forEach((key) => {
            if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
              result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&';
            }
          });
          return result;
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
};
export default request;
