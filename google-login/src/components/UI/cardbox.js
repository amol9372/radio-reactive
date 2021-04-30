import React from "react";
import classes from "../../components/UI/card.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // backgroundColor: (props) => props.backgroundColor,
    // "&:hover": {
    //   backgroundColor: (props) => props.backgroundColor,
    // },
    // color: "#fff",
    // "&:focus": {
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },

    alignItems: (props) => (props.align ? props.align : "center"),
    marginTop: (props) => (props.marginTop ? props.marginTop : "5%"),
  },
});

const CardBox = (props) => {
  const cardboxStyle = useStyles(props);

  return (
    <div className={`${classes.cardbox} ${cardboxStyle.root}`}>
      {props.children}
    </div>
  );
};

export default CardBox;
