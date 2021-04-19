import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const small = "20%";
const medium = "50%";

const useStyles = makeStyles({
  root: {},

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

const InputField = (props) => {
  const inputFieldStyle = useStyles(props);

  return (
    <TextField
      id={props.label}
      required={props.required}
      error={props.error}
      helperText={props.validationText}
      id="outlined-basic"
      value={props.value}
      label={props.label}
      onChange={props.onchange}
      variant="outlined"
      fullWidth
      type={props.type}
      className={`${inputFieldStyle.root} ${inputFieldStyle.size}`}
    />
  );
};

export default InputField;
