import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XmlHttpRequest";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;

function Login() {
  const [authRequired, setAuthRequired] = useState(true);
  axios.defaults.withCredentials = true;
  async function successResponseGoogle(res) {
    localStorage.setItem("user-signed-in", true);

    // Send the token to backend api for validation
    const data = { id_token: res.tokenId };
    await axios.post("/me", data, { withCredentials: true }).then((res) => {
      setAuthRequired(false);
      console.log(res.data);
    });
  }

  const failureResponseGoogle = (res) => {
    console.log("[LOGIN FAILED]\n", res);
  };

  async function logoutSuccess() {
    console.log("[Logout Successful]\n");
    localStorage.setItem("user-signed-in", false);

    // delete the user from server cache
    await axios.delete("/me", { withCredentials: true }).then((res) => {
      setAuthRequired(true);
      console.log(res.data);
    });
  }

  useEffect(() => {
    if (localStorage.getItem("user-signed-in") === true) {
      console.log("[User Already Signed in]");
      setAuthRequired(false);
    }
  }, []);

  const loginStyle = {
    margin: "6%",
    border: "solid 1px",
    padding: "5px",
  };

  return (
    <div className="login d-flex card" style={loginStyle}>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
      {authRequired ? (
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={successResponseGoogle}
            onFailure={failureResponseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            // style={}
            theme="dark"
          />
        </div>
      ) : (
        <div>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
            // style={}
            theme="dark"
          ></GoogleLogout>
        </div>
      )}
    </div>
  );
}

export default Login;
