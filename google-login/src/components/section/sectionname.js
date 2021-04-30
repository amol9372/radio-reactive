import Card from "../UI/card";
import Label from "../UI/label";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import InputField from "../UI/inputfield";
import { Editor } from "../UI/editorbox";
import IconBar from "./iconbar";

const useStyles = makeStyles((theme) => ({
  sectionName: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));
const SectionName = (props) => {
  const sectionNameStyle = useStyles();

  const cancelEdit = () => {
    props.onCancel();
  };

  const changeSectionName = () => {
    props.changeSectionName();
  };

  const sectionNameHandler = (event) => {
    props.sectionNameHandler(event.target.value);
  };

  const submitNameChange = (event) => {
    event.preventDefault();
    props.nameFormSubmit();
  };

  if (props.editMode) {
    return (
      <form onSubmit={submitNameChange}>
        <Card width="70%">
          <InputField
            value={props.name}
            onchange={sectionNameHandler}
            type="text"
          />
          <Editor taskId={props.id} onCancelEdit={cancelEdit} />
        </Card>
      </form>
    );
  }

  return (
    <div className={sectionNameStyle.sectionName}>
      <Label color="white" fontSize="40px">
        <span>{props.name}</span>
      </Label>
      <IconBar onSectionChange={changeSectionName} />
    </div>
  );
};

export default SectionName;
