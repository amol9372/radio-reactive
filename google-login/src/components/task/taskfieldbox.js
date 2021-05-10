import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import TaskItem from "./taskfield";
import { AddButton } from "./../section/iconbar";
import Label from "../UI/label";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  completedTasks: {
    color: "hsla(0,0%,100%,.57)",
    marginRight: "auto",
  },
}));

const taskAttribute = {
  id: NaN,
  name: "",
  priority: "",
  completed: false,
};

const TaskFieldBox = (props) => {
  const classes = useStyles();

  const [addTaskMode, setAddTaskMode] = useState(false);
  const [tasks, setTasks] = useState(props.tasks);

  const onTaskItemClick = (id) => {
    console.log("[Edit clicked]", id);

    const newTasks = tasks.map((item) => {
      const itemClone = { ...item };
      itemClone.edit = false;
      if (item.id === id) {
        itemClone.edit = true;
      }
      return itemClone;
    });

    setTasks(newTasks);
  };

  const toggleTaskStatus = (toggledTask) => {
    console.log(toggledTask);

    const newTasks = tasks.map((task) => {
      const taskClone = { ...task };
      // taskClone.edit = false;
      if (task.id === toggledTask.id) {
        taskClone.completed = !taskClone.completed;
      }
      return taskClone;
    });

    setTasks(newTasks);
    props.toggleTaskStatus(newTasks, props.section.id);
    // updated items in parent
  };

  const onCancelTaskEditor = (id) => {
    console.log("[Cancel clicked]", id);

    const newTasks = tasks.map((task) => {
      const taskClone = { ...task };
      taskClone.edit = false;
      if (task.id === id) {
        taskClone.edit = false;
      }
      return taskClone;
    });

    setTasks(newTasks);
  };

  const addTask = () => {
    setAddTaskMode(true);
  };

  const onCancelNewTaskEditor = () => {
    setAddTaskMode(false);
  };

  const isCompletedTasks = () => {
    if (tasks) {
      return tasks.filter((task) => task.completed).length > 0;
    }

    return false;
  };

  return (
    <React.Fragment>
      {tasks && (
        <List dense className={classes.root}>
          {tasks
            .filter((task) => task.completed === false)
            .map((task) => {
              return (
                <TaskItem
                  id={task.id}
                  key={task.id}
                  value={task.value}
                  editMode={task.edit}
                  onEditToggle={onTaskItemClick}
                  onCancel={onCancelTaskEditor}
                  toggleTaskCompletion={toggleTaskStatus}
                  completed={false}
                />
              );
            })}
        </List>
      )}
      <AddButton
        displayTaskEditor={addTask}
        addTaskMode={addTaskMode}
        onCancelEdit={onCancelNewTaskEditor}
      />

      {isCompletedTasks() && (
        <div>
          {/* <Divider style={{ color: "green" }} /> */}
          <Accordion style={{ background: "#282828", border: "0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.completedTasks}>
                {tasks.filter((task) => task.completed === true).length}
                {"  "}
                Completed Tasks
              </Typography>
            </AccordionSummary>

            <List dense className={classes.root}>
              {tasks
                .filter((task) => task.completed === true)
                .map((task) => {
                  return (
                    <TaskItem
                      id={task.id}
                      key={task.id}
                      value={task.value}
                      editMode={task.edit}
                      onEditToggle={onTaskItemClick}
                      onCancel={onCancelTaskEditor}
                      completed={true}
                      border="0"
                      toggleTaskCompletion={toggleTaskStatus}
                    />
                  );
                })}
            </List>
          </Accordion>
        </div>
      )}
    </React.Fragment>
  );
};

export default TaskFieldBox;
