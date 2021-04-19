import React from "react";
import classes from "../../components/UI/card.module.css";

const CardBox = (props) => {
  return <div className={classes.cardbox}>{props.children}</div>;
};

export default CardBox;
