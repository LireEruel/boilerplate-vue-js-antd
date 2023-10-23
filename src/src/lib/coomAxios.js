import { notification } from "ant-design-vue";
import axios from "axios";

const cancelTokenSource = axios.CancelToken.source();

const commonAxios = axios.create({
  cancelToken: cancelTokenSource.token,
});

commonAxios.interceptors.request.use(function (config) {
  if (typeof window === undefined) {
    return;
  }

  // 이 부분에 cookie 확인해서 유효성 검증하는 코드를 추가할 수 있습니다.

  config.headers = Object.assign({}, config.headers, {
    "Content-Type": "application/json",
    // 'access_token': cookies['access_token'],
  });

  return config;
});

commonAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    console.error("error", error?.response);
    const errorCode = String(error?.response?.status ?? "");

    if (errorCode === "401") {
      notification.error({
        key: "error-notification",
        message: "토큰이 만료되었습니다. 로그인을 다시 해주세요.",
        description: errorCode,
      });
    } else if (errorCode === "403") {
      notification.error({
        key: "error-notification",
        message: "권한이 없습니다.",
        description: errorCode,
      });
    } else {
      notification.error({
        key: "error-notification",
        message: "API 에러 발생",
        description: errorCode,
      });
    }
    return Promise.reject(error);
  }
);

export default commonAxios;
