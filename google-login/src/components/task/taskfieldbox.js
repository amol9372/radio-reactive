import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import TaskItem from "./taskfield";
import { AddButton } from "./../section/iconbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
}));

const TaskFieldBox = (props) => {
  const classes = useStyles();

  const [addTaskMode, setAddTaskMode] = useState(false);

  const [items, setItems] = React.useState([
    {
      id: 1,
      value: "item1",
      edit: false,
    },
    {
      id: 2,
      value: "item2",
      edit: false,
    },
    {
      id: 3,
      value: "item3",
      edit: false,
    },
  ]);

  const onTaskItemClick = (id) => {
    console.log("[Edit clicked]", id);

    const newItems = items.map((item) => {
      const itemClone = { ...item };
      itemClone.edit = false;
      if (item.id === id) {
        itemClone.edit = true;
      }
      return itemClone;
    });

    setItems(newItems);
  };

  const onCancelTaskEditor = (id) => {
    console.log("[Cancel clicked]", id);

    const newItems = items.map((item) => {
      const itemClone = { ...item };
      itemClone.edit = false;
      if (item.id === id) {
        itemClone.edit = false;
      }
      return itemClone;
    });

    setItems(newItems);
  };

  const addTask = () => {
    setAddTaskMode(true);
  };

  const onCancelNewTaskEditor = () => {
    setAddTaskMode(false);
  };

  return (
    <List dense className={classes.root}>
      {items.map((item) => {
        // const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <TaskItem
            id={item.id}
            key={item.id}
            value={item.value}
            editMode={item.edit}
            onEditToggle={onTaskItemClick}
            onCancel={onCancelTaskEditor}
          />
        );
      })}
      <AddButton
        displayTaskEditor={addTask}
        addTaskMode={addTaskMode}
        onCancelEdit={onCancelNewTaskEditor}
      />
    </List>
  );
};

export default TaskFieldBox;
