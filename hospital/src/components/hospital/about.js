import React from "react";

function About() {
  const historyStyle = {
    backgroundColor: "white",
    border: 0,
  };

  return (
    <div className="about">
      <div className="history-text card" style={historyStyle}>
        <p className="h4">About Tagore Multi Specialty Hospital</p>
        <p className="text">
          Tagore Multi-Speciality hospital was established in 1987, by Dr.
          Naresh Kaushal & Dr. Sneh Kaushal, to provide cost-effectively yet
          specialized quality healthcare services from various fields of medical
          sciences like Urology, Endoscopy, O.B.G, General Surgery, Laparoscopic
          Surgery, E.N.T., Pediatrics, Orthopedics and Cardiology, complemented
          by personalized care and individual attention to each patient with
          unparalleled passion and commitment to serve the medical needs of the
          growing population. Tagore Multi-Speciality Hospital is focused.
        </p>
      </div>
      <div className="image card">Image</div>
    </div>
  );
}

export default About;
