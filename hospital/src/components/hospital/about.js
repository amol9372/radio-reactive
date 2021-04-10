import React from "react";
import PageSizeUtil from "./pageSizeUtil";

function About() {
  const historyStyle = {
    backgroundColor: "white",
    border: 0,
  };

  let pageSize = PageSizeUtil.getPageSize();

  if (pageSize === undefined) {
    pageSize = PageSizeUtil.getPageSizeFromWindow(window.innerWidth);
  }

  let styleMap = new Map();

  styleMap.set("large", {
    detail: {
      fontSize: "medium",
      fontFamily: "-webkit-pictograph",
      height: "auto",
    },
    title: "h4",
  });

  styleMap.set("wide", {
    detail: {
      fontSize: "smaller",
      fontFamily: "-webkit-pictograph",
      height: "auto",
    },
    title: "h5",
  });

  styleMap.set("mobile", {
    detail: {
      fontSize: "small",
      fontFamily: "-webkit-pictograph",
      height: "auto",
    },
    title: "h6",
  });

  const lineStyle = {
    width: "12%",
    marginTop: "0.2%",
    color: "lightblue",
    backgroundColor: "lightblue",
    border: "solid 2px",
    borderRadius: "10px",
  };

  return (
    <div className="about card d-flex">
      <div className="history-text card d-flex" style={historyStyle}>
        <p className={styleMap.get(pageSize).title}>
          About Tagore Multi Specialty Hospital
        </p>
        <hr style={lineStyle}></hr>
        <p className="text-muted" style={styleMap.get(pageSize).detail}>
          Tagore Multi-Speciality hospital was established in 1987, by Dr.
          Naresh Kaushal & Dr. Sneh Kaushal, to provide cost-effectively yet
          specialized quality healthcare services from various fields of medical
          sciences like Urology, Endoscopy, O.B.G, General Surgery, Laparoscopic
          Surgery, E.N.T., Pediatrics, Orthopedics and Cardiology, complemented
          by personalized care and individual attention to each patient with
          unparalleled passion and commitment to serve the medical needs of the
          growing population. Tagore Multi-Speciality Hospital is focused.
          Tagore Multi-Speciality hospital was established in 1987, by Dr.
          Naresh Kaushal & Dr. Sneh Kaushal, to provide cost-effectively yet
          specialized quality healthcare. Tagore Multi-Speciality hospital was
          established in 1987, by Dr. Naresh Kaushal & Dr. Sneh Kaushal, to
          provide cost-effectively yet specialized quality healthcare
        </p>
      </div>
      {/* <div className="image card">Image</div> */}
    </div>
  );
}

export default About;
