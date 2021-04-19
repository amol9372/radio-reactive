import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const small = "20%";
const medium = "50%";

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => props.backgroundColor,
    "&:hover": {
      backgroundColor: (props) => props.backgroundColor,
    },
    color: "#fff",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },

  size: {
    width: (props) => {
      if (props.size === "small") {
        return small;
      } else if (props.size === "medium") {
        return medium;
      }
    },
  },
});

const MyButton = (props) => {
  const buttonStyle = useStyles(props);

  return (
    <Button
      className={`${buttonStyle.root} ${buttonStyle.size}`}
      variant="contained"
      // onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </Button>
  );
};

export default MyButton;
