import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

export const Response = (message, loggedIn) => {
  return { message: message, loggedIn: loggedIn };
};

class LoginService {
  static async userLogin(data, url) {
    let response;

    console.log("[Auth Request]", data);

    try {
      const res = await axios.post(url, {
        data,
      });

      if (res.status === 200) {
        response = Response(res.statusText, true);

        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem("user-signed-in", true);
      } else {
        response = Response(res.statusText, false);
      }
    } catch (error) {
      response = Response(error.message, false);
    }

    return response;
  }
}

export default LoginService;
