import React, { useState, useRef } from "react";

import Card from "../UI/card";
import Label from "../UI/label";
import { makeStyles } from "@material-ui/core/styles";
import MyButton from "../UI/button";
import { Editor } from "../UI/editorbox";
import InputField from "../UI/inputfield";

const useStyles = makeStyles({
  header: {
    marginRight: "10px",
  },
});

const LabelHeader = (props) => {
  const prevLabelName = useRef(props.labelName);
  const labelHeaderStyle = useStyles();
  const [editLabelMode, setEditLabelMode] = useState(false);

  const labelNameHandler = (event) => {
    props.labelNameHandler(event.target.value);
  };

  const submitNameChange = (event) => {
    event.preventDefault();
    props.labelNameFormSubmit();
  };

  const cancelEdit = (id) => {
    setEditLabelMode(false);
    props.prevLabelName(prevLabelName.current);
  };

  if (editLabelMode) {
    return (
      <form onSubmit={submitNameChange}>
        <Card width="30%">
          <InputField
            value={props.labelName}
            onchange={labelNameHandler}
            type="text"
          />
          <Editor taskId={props.id} onCancelEdit={cancelEdit} />
        </Card>
      </form>
    );
  }

  return (
    <Card flexDirection="row" padding="1%" width="100%" bgcolor="#1f1f1f">
      <div className={labelHeaderStyle.header}>
        <MyButton
          type="button"
          varient="text"
          backgroundColor="#1f1f1f"
          text={props.labelName}
          textSize="23px"
          onClick={() => {
            setEditLabelMode(true);
          }}
        />
      </div>
    </Card>
  );
};

export default LabelHeader;
