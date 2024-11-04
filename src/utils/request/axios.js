import axios from "axios";
import router from "@/router/index.js";
import { v4 as uuidv4 } from "uuid";
import { baseURL } from "@/utils/config.js";
import _ from "lodash";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 6000,
});
//请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response && response.status === 200) {
      //成功
      if (response.data.code == 200) {
        return response.data;
      }
      //请求出错
      if (response.data.code == 400) {
        $lctools.message.error(response.data.msg);
        return Promise.reject(response.data);
      }
      //登录过期
      if (response.data.code == 401) {
        $lctools.message.warn("账号信息过期,请重新登陆");
        router.push("/");
      }
      //服务器运行错误
      if (response.data.code == 402) {
        $lctools.message.error(response.data.msg + response.data.code);
      }
      //账号被封禁
      if (response.data.code == 444) {
        $lctools.message.error(response.data.msg, 5000);
        userData().token = "";
        router.push("/");
      }
      //账号被顶号
      if (response.data.code == 445) {
        $lctools.message.error(response.data.msg, 5000);
        userData().token = "";
        router.push("/");
      }
      //频繁请求
      if (response.data.code == 447) {
        const id = uuidv4();
        sessionStorage.setItem(id, JSON.stringify(response.data.data));
        router.push(`/captcha/${id}`);
      }
    } else {
      return Promise.reject(response.data);
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
