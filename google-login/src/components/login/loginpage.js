import React, { useState, useEffect } from "react";
import LoginBox from "./loginbox";
import { Redirect } from "react-router";
import { trackPromise } from "react-promise-tracker";
import LoginService from "./../../services/loginService";

const LoginPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-signed-in") === "true") {
      console.log("[User Already Signed in]");
      setUserLoggedIn(true);
    } else {
      console.log("[Redirecting to login page]");
    }
  }, []);

  const googleLoginResponse = (res) => {
    if (res.error) {
      setResponse(res.error);
      setUserLoggedIn(false);
      return;
    }

    const request = { id_token: res.tokenId };

    getLoginResponse("/user/google-signin", request);
  };

  const onLogin = (data) => {
    getLoginResponse("/user/login", data);
  };

  const getLoginResponse = (url, request) => {
    setResponse("");
    const response = trackPromise(LoginService.userLogin(request, url));

    response.then((res) => {
      console.log(res);
      setResponse(res.message);
    });
  };

  return (
    <React.Fragment>
      {userLoggedIn && <Redirect to="/home" />}
      <LoginBox
        onFormSubmit={onLogin}
        response={response}
        googleLogin={googleLoginResponse}
      />
    </React.Fragment>
  );
};

export default LoginPage;
