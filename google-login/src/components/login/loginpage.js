import React, { useState, useEffect } from "react";
import LoginBox from "./loginbox";
import { Redirect } from "react-router";
import axios from "axios";
import { LOGIN } from "../../constants";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

const LoginPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [response, setResponse] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-signed-in") === "true") {
      console.log("[User Already Signed in]");
      setUserLoggedIn(true);
    } else {
      console.log("[Redirecting to login page]");
    }
  }, []);

  const googleLoginResponse = (res) => {
    console.log("[Google Auth Response]", res);
  };

  const onLogin = (data) => {
    setResponse("");
    setShowSpinner(true);
    axios
      .post(LOGIN, data, { withCredentials: true })
      .then((res) => {
        setShowSpinner(false);
        if (res.data.token) {
          setResponse("Redirecting to Home page ....");
          localStorage.setItem("user-signed-in", true);
          //   userContext.user = res.data.user;
          setUserLoggedIn(true);
        } else {
          console.log(res.data.message);
          setResponse(res.data.message);
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        console.log(error.message);
        setResponse(error.message);
      });
  };

  return (
    <React.Fragment>
      {userLoggedIn && <Redirect to="/home" />}
      <LoginBox
        onFormSubmit={onLogin}
        spinner={showSpinner}
        response={response}
        googleLogin={googleLoginResponse}
      />
    </React.Fragment>
  );
};

export default LoginPage;
