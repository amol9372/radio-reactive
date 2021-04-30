import React from "react";
import Card from "../UI/card";
import CardBox from "../UI/cardbox";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import AddLabelDialog from "../dialog/addLabelDialog";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "hsla(0,0%,100%,.97)",
    paddingLeft: "26px",
    gap: "10px",
    paddingRight: "20px",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#282828",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    minWidth: "30px",
  },
  labelText: {
    "& .MuiTypography-body1": {
      fontSize: "15px",
    },
  },
}));

const SideBar = (props) => {
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const sideBarStyle = useStyles(props);

  const labels = [
    {
      name: "label 1",
      sections: ["section 1", "section 2"],
      color: "lightgreen",
      current: true,
    },
    {
      name: "label 2",
      sections: ["section 4", "section 8"],
      color: "lightblue",
    },
  ];
  const handleClick = () => {
    setOpen(!open);
  };

  const openLabelDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <CardBox align="flex-start">
      <Card width="300px">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={sideBarStyle.root}
        >
          <ListItem
            button
            onClick={handleClick}
            className={sideBarStyle.header}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary="Labels" />
            <ListItemSecondaryAction>
              <IconButton style={{ color: "hsla(0,0%,90%,.97)" }}>
                <Add onClick={openLabelDialog} />
                <AddLabelDialog
                  open={dialogOpen}
                  closeDialog={closeDialog}
                  existingLabels={labels.map((label) => label.name)}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {labels.map((label) => {
                return (
                  <ListItem
                    key={label.name}
                    button
                    className={sideBarStyle.nested}
                    selected={label.current}
                  >
                    <ListItemIcon className={sideBarStyle.icon}>
                      <FiberManualRecordIcon
                        style={{ color: label.color, fontSize: 15 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={label.name}
                      className={sideBarStyle.labelText}
                      style={{
                        color: "hsla(0,0%,100%,.87)",
                      }}
                    />
                    <span style={{ color: "hsla(0,0%,70%,.67)" }}>
                      {label.sections.length}
                    </span>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Card>
    </CardBox>
  );
};

export default SideBar;
