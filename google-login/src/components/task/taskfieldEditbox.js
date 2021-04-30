import React, { useState } from "react";
import Card from "./../UI/card";
import InputField from "./../UI/inputfield";
import CustomIconDropdown from "./../dropdown/icondropdown";
import { Editor } from "./../UI/editorbox";

const priorityMasterData = [
  { name: "Priority 1", color: "#ff726f" },
  { name: "Priority 2", color: "#8baae4" },
  { name: "Priority 3", color: "#83e292" },
  { name: "Priority 4", color: "#dfdedd" },
];

const TaskFieldEditBox = (props) => {
  const taskAttribute = {
    name: "",
    colorName: "Priority 4",
    // validation: "",
    // error: false,
    color: "#dfdedd",
    default: false,
  };

  const [task, setTask] = useState(taskAttribute);

  const taskFieldEditorHandler = (event) => {
    props.onchange(event.target.value);
  };

  const cancelEdit = (id) => {
    props.onCancelEdit(id);
  };

  const taskPriorityChangeHandler = (taskColor) => {
    setTask((prevTask) => ({
      ...prevTask,
      color: taskColor.color,
      colorName: taskColor.name,
    }));
  };

  return (
    <Card width="97%" flexGap="6px" border="1px solid grey">
      <InputField
        label="enter a task"
        type="text"
        value={props.value}
        onchange={taskFieldEditorHandler}
        // error={email.error}
        // validationText={email.validation}
      />
      <Card width="97%" flexGap="5px" flexDirection="row">
        <CustomIconDropdown
          name={task.colorName}
          color={task.color}
          dropdownIcon="priority"
          masterData={priorityMasterData}
          onChange={taskPriorityChangeHandler}
        />
      </Card>
      <Editor
        taskId={props.id}
        onCancelEdit={cancelEdit}
        masterData={priorityMasterData}
      />
    </Card>
  );
};

export default TaskFieldEditBox;
