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
        'dxcX6ywnxKzKGhISUH63DYaVWcJ4MGXb0zwaTP0I7ltDskru6--2tsuTp1m_XBk1jQkHYgq6x8GNtW2vCevuNG9ycTyQsSrqXoFOLWJ_f0BWIJOscVPv_K7ieBkp9IOjv1xGxf5qDWCyHtO7zv8k47F_T_eabDQ5NVg7rCBijkDjjZFCLX4981XpJy1P1qQ2nUy39_Biw-QpzIjUAlCJOCKnj2u1bY5dTpqJXIpe0sfNsfcaVqTUIgdGLlQ2KSJn4lBfjmgLBNYFWVchWVuU0j9OcpDIsOrt3vFDoJZclTQ7omQsJTqTwo0WUIfztb7YjJY-CJBHkl2I-h2_NXSV4Y657_Ft5kTsXCAGaF5XRAM'
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
