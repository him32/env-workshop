import React from "react";
import About from "../assets/Untitled design/About.jpg";

const Agbu = () => {
  return (
    <div className="container">
      <div className="row shadow-lg mb-5 bg-body-tertiary rounded overflow-hidden">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={About} className="img-fluid rounded-pill" alt="About GBU" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <p className="text-center fs-1 fw-bold">ABOUT GBU</p>
          </div>
          <div className="row">
            <p className="fw-normal text-start">
              Gautam Buddha University, established by the Uttar Pradesh Act (9)
              of 2002, commenced its first academic session at its 511 acres
              lush green campus at Greater Noida in August 2008. The University
              is fully funded by the New Okhla Industrial Development Authority
              (NOIDA) and the Greater Noida Industrial Development Authority
              (GNIDA), the undertakings of the Government of Uttar Pradesh. The
              University is recognized by the University Grants Commission under
              UGC Act and is a member of the Association of Indian Universities.
              Gautam Buddha University is recognized by the University Grants
              Commission of India vide F.9-18/2009 (CRP-I) dated 13 May 2009
              under section 2(f) of UGC Act 1956. Through this, the University
              has been empowered to award degrees as specified by UGC under
              section 22 of the UGC Act 1956 at its main campus with the
              approval of Statutory Councils, wherever required. Recognition and
              Inclusion by the University Grants Commission of India (UGC) under
              section 12 B of the University Grants Commission, UGC ACT 1956.
              Recognised under UGC Section 12B and NAAC accredited with B+
              Grade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agbu;
