import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    width: 500,
    "& > *": {
      margin: theme.spacing(0.5),
    },
    marginLeft: 85,
    marginBottom: 30,
  },
}));

const serviceStyle = {
  marginLeft: 90,
  marginBottom: 20,
  //width: 500,
};

export default function Services() {
  const classes = useStyles();

  return (
    <div className="services d-flex flex-column">
      {/* <div className="services" style={serviceStyle}> */}
      <p className="h4" style={serviceStyle}>
        Available Services
      </p>
      {/* </div> */}
      <div className={classes.root}>
        <Chip size="medium" label="Basic Service" />
        <Chip size="medium" label="Basic Service" />
        <Chip size="medium" label="Basic Service" />
        <Chip size="medium" label="Basic" />
        <Chip size="medium" label="Basic Service" />
        <Chip size="medium" label="Basic Service" />
      </div>
    </div>
  );
}
