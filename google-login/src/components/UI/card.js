import React from "react";
import classes from "../../components/UI/card.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: (props) => props.bgcolor,
  },

  size: {},
});

const Card = (props) => {
  const cardStyle = useStyles(props);

  return (
    <div className={`${classes.card} ${cardStyle.root}`}>{props.children}</div>
  );
};

export default Card;
