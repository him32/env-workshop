import React from "react";
import About from "../assets/Untitled design/sponsora.png";

const Asponsor = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row shadow-lg p-3 mb-5 bg-body-tertiary rounded overflow-hidden">
        <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
            <img
              src={About}
              className="img-fluid rounded-pill"
              alt="About SPBB"
              style={{ width: "100%", objectFit: "cover", height: "100%" }}
            />
          </div>
          
        <div className="col-md-6">
            <div className="row">
              <p className="text-center fs-1 fw-bold">ABOUT SPBB</p>
            </div>
            <div className="row">
              <p className="fw-normal text-start">
                The Society for Plant Biochemistry and Biotechnology (SPBB),
                established in May 1991 and registered under the Societies
                Registration Act XXI of 1860 on November 15, 1991, aims to
                advance research in Plant Biochemistry, Molecular Biology,
                Molecular Genetics, and Biotechnology in India. It provides a
                forum for scientists in these fields to exchange knowledge,
                fosters high standards in teaching and research, and collects,
                collates, and disseminates relevant scientific information. SPBB
                collaborates with other national societies sharing similar
                objectives and publishes a journal dedicated to Plant
                Biochemistry and Biotechnology research. The Division of
                Biochemistry, ICAR-IARI, and ICAR-National Institute for Plant
                Biotechnology, New Delhi, have been instrumental in supporting
                its activities, ensuring the fulfillment of its mission to
                promote scientific progress in plant sciences.
              </p>
            </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Asponsor;
