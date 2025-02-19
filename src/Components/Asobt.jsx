import React from "react";
import SObt from "../assets/Untitled design/SObt.webp";
import About from "../assets/Untitled design/About.jpg";

const Asobt = () => {
  return (
    <div className="container">
      <div className="row shadow-lg p-3 mb-5 bg-body-tertiary rounded overflow-hidden">
        <div className="col-md-6">
          <div className="row">
            <p className="text-center fs-1 fw-bold">ABOUT SOBT</p>
          </div>
          <div className="row">
            <p className="fw-normal text-start">
              The School of Biotechnology (SOBT) is located in a
              state-of-the-art building that incorporates both teaching and
              research facilities. The entire school building, including the
              lecture halls, teaching and research laboratories, and school
              library, is centrally air-conditioned and equipped with
              round-the-clock internet connectivity. Students here are educated
              in classical as well as modern biotechnology using the latest
              pedagogy techniques and also provided with hands-on laboratory
              training.Biotechnology combines disciplines like genetics,
              molecular biology, biochemistry, microbiology, immunology, and
              cell biology, which are in turn linked to practical disciplines
              like chemical engineering, information technology, and
              biorobotics. The School of Biotechnology emphasizes a
              Biotechnology education program with an impetus to generate a
              workforce that could turn into a substantially trained pool to
              meet the country’s demands.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={About}
            className="img-fluid rounded-pill"
            alt="About SOBT"
          />
        </div>
      </div>
    </div>
  );
};

export default Asobt;
