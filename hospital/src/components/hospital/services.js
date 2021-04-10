import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import PageSizeUtil from "./pageSizeUtil";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    width: "auto",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    margin: "1%",
  },
}));

export default function Services() {
  const serviceLabels = [
    "Basic Service",
    "Basic Service",
    "Basic Service",
    "Basic Service",
    "Basic Service",
    "Basic Service",
  ];

  const serviceStyle = {
    margin: "4% 7%",
  };

  const classes = useStyles();

  let pageSize = PageSizeUtil.getPageSize();

  if (pageSize === undefined) {
    pageSize = PageSizeUtil.getPageSizeFromWindow(window.innerWidth);
  }

  let styleMap = new Map();

  styleMap.set("large", {
    detail: {
      fontSize: "medium",
      fontFamily: "-webkit-pictograph",
    },
    title: "h4",
    chipSize: "medium",
  });

  styleMap.set("wide", {
    detail: {
      fontSize: "smaller",
      fontFamily: "-webkit-pictograph",
    },
    title: "h5",
    chipSize: "small",
  });

  styleMap.set("mobile", {
    detail: {
      fontSize: "small",
      fontFamily: "-webkit-pictograph",
    },
    title: "h6",
    chipSize: "small",
  });

  return (
    <div className="services card d-flex flex-column" style={serviceStyle}>
      <p className={styleMap.get(pageSize).title}>Available Services</p>
      <div className={classes.root}>
        {serviceLabels.map((service) => (
          <Chip
            key={service.index}
            size={styleMap.get(pageSize).chipSize}
            label={service}
          />
        ))}
      </div>
    </div>
  );
}
