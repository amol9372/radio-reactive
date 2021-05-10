import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

export const Response = (data) => {
  return { labels: data };
};

export const errorResponse = (errorMessage) => {
  return { error: errorMessage };
};

class LabelService {
  static async getLabels(data, url) {
    let response;

    console.log("[Get Labels Request]", data);

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization:
            "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJhbW9sc2luZ2g5MzcyQGdtYWlsLmNvbSIsImlhdCI6MTYyMDU0NzEyOSwibmJmIjoxNjIwNTQ3MTI5LCJleHAiOjE2MjA1NDg5Mjl9.rotZn2hEbkclLx4s8cVizNeoCIwUJQ4sjSZiaLBBHYk",
        },
      });

      console.log(res);
      if (res.status === 200) {
        response = Response(res.data);

        // localStorage.setItem("access_token", res.data.access_token);
        // localStorage.setItem("refresh_token", res.data.refresh_token);
        // localStorage.setItem("user-signed-in", true);
      } else {
        response = errorResponse(res.statusText);
      }
    } catch (error) {
      response = errorResponse(error.message);
    }

    return response;
  }
}

export default LabelService;
