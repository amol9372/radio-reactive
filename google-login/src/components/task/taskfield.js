import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TaskFieldEditBox from "./taskfieldEditbox";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";

const useStyles = makeStyles((theme) => ({
  listItem: {
    border: (props) => (props.border ? props.border : "solid 1px black"),
    borderRadius: "8px",
    height: (props) => (props.height ? props.height : "43px"),
    gap: "10px",
  },
}));

const TaskItem = (props) => {
  const classes = useStyles(props);
  const [checked, setChecked] = React.useState([1]);
  const [taskEditValue, setTaskEdit] = useState(props.value);

  const taskFieldEditorHandler = (value) => {
    setTaskEdit(value);
  };

  const handleToggle = () => {
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    // setChecked(newChecked);
    props.toggleTaskCompletion(props);
  };

  const toggleEdit = (id) => {
    props.onEditToggle(id);
  };

  const cancelEdit = (id) => {
    props.onCancel(id);
  };

  if (props.editMode) {
    return (
      <TaskFieldEditBox
        id={props.id}
        value={taskEditValue}
        onchange={taskFieldEditorHandler}
        onCancelEdit={cancelEdit}
      />
    );
  } else {
    return (
      <ListItem
        key={props.id}
        button
        onClick={() => toggleEdit(props.id)}
        className={classes.listItem}
      >
        <LabelOutlinedIcon fontSize="small" style={{ color: "grey" }} />
        <ListItemText
          primary={props.value}
          style={{ color: "white", textDecoration: "line-through" }}
        />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle}
            style={{ color: "grey" }}
            // checked={checked.indexOf(props.value) !== -1}
            defaultChecked={props.completed}
            inputProps={{ "aria-labelledby": props.value }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
};

export default TaskItem;
