import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../context";

const Home = () => {
  const [authRequired, setAuthRequired] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("user-signed-in") === "true") {
      console.log("[User Already Signed in]");
    } else {
      setAuthRequired(true);
      console.log("[Redirecting to login page]");
    }
  }, []);

  return (
    <React.Fragment>
      {authRequired && <Redirect to="/login" />}{" "}
      <label>
        <h2>Welcome Home {userContext.user.name}</h2>
      </label>
    </React.Fragment>
  );
};

export default Home;
