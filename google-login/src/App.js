import "./App.css";
import React from "react";
import Login from "./components/login/login";
import PrimarySearchAppBar from "./components/appBar/appbar";

function App() {
  return (
    <div className="App m-3">
      <PrimarySearchAppBar />
      <Login />
    </div>
  );
}

export default App;
