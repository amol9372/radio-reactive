import { TextField } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import GoogleMaps from "./components/material-autocomplete";

function App() {
  const appStyle = {
    margin: "4%",

    gap: "10px",
  };

  const [address, setAddress] = useState("");

  return (
    <div className="App d-flex" style={appStyle}>
      <TextField
        placeholder="No Address selected"
        value={address}
        variant="standard"
      />
      <GoogleMaps />
      {address}
    </div>
  );
}

export default App;
