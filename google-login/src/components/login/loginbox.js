import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import GoogleLoginButton from "../social-login/GoogleLoginButton";
import React, { useState } from "react";
import Card from "../UI/card";
import MyButton from "../UI/Button";
import InputField from "../UI/inputfield";
import axios from "axios";
import CardBox from "../UI/cardbox";
import { Link } from "@material-ui/core";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

function LoginBox(props) {
  const userAttribute = {
    value: "",
    validation: "",
    error: false,
  };
  const [email, setEmail] = useState(userAttribute);
  const [password, setPassword] = useState(userAttribute);

  const handleAuthResponse = (res) => {
    props.googleLogin(res);
  };

  const loginFormSubmit = (event) => {
    event.preventDefault();
    const data = { email: email.value, password: password.value };

    props.onFormSubmit(data);
  };

  const emailHandler = (event) => {
    setEmail({ value: event.target.value, validation: "" });
  };

  const passwordHandler = (event) => {
    setPassword({ value: event.target.value, validation: "" });
  };

  const newUserStyle = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "ceneter",
    gap: "5px",
    margin: "auto",
  };

  return (
    <React.Fragment>
      <form onSubmit={loginFormSubmit}>
        <CardBox>
          <Card>
            <GoogleLoginButton authResponse={handleAuthResponse} />
            <Divider />
            <InputField
              label="Email"
              type="text"
              value={email.value}
              onchange={emailHandler}
              error={email.error}
              validationText={email.validation}
              required={true}
            />
            <InputField
              label="Password"
              type="password"
              value={password.value}
              onchange={passwordHandler}
              validationText={password.validation}
              required={true}
            />
            <MyButton backgroundColor="grey" text="Login" type="submit" />
            <Divider />
            <div style={newUserStyle}>
              <label>New User?</label>{" "}
              <Link href="/register" color="secondary">
                Sign Up
              </Link>
            </div>
          </Card>

          {props.spinner && <CircularProgress color="secondary" />}

          {props.response && (
            <label style={{ color: "white" }}>{props.response} </label>
          )}
        </CardBox>
      </form>
    </React.Fragment>
  );
}

export default LoginBox;
