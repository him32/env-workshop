import React from "react";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import vc from "../assets/committee/rk_sinha.jpg";
import dean from "../assets/committee/660677ed82b90_niranjan.melkania.jpg";
import oc1 from "../assets/committee/nagendra.jpg";
import oc2 from "../assets/committee/iq.png";
import oc3 from "../assets/committee/Eti_ma'am.png";
import st1 from "../assets/committee/shashank.png";
import st2 from "../assets/committee/Himanshu.png";
import st3 from "../assets/committee/Pawni.png";
import st4 from "../assets/committee/Priyanshu.png";
import st5 from "../assets/committee/Ayan.png";
import st6 from "../assets/committee/dhruv.png";
import Footer from "../Components/Footer";

const Committee = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* Navbar & Notices */}
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <MovingNotice />
        </div>

        {/* Section Header */}
        <div className="row mt-5">
          <p className="text-center fw-bold fs-1">COMMITTEE</p>
        </div>

        {/* Chief Patron */}
        <div className="row mt-5">
          <p className="text-center fw-medium fs-3">CHIEF PATRON</p>
        </div>
        <div className="row p-5 justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <div
              className="p-3 shadow mb-5 bg-body-tertiary rounded text-center"
              style={{ width: 250 }}
            >
              <img
                src={vc}
                className="rounded-circle img-thumbnail"
                alt="Vice Chancellor"
              />
              <p className="fw-bold">Prof. R. K. Sinha</p>
              <p className="lh-1 fw-lighter">
                Vice Chancellor,
                <br /> Gautam Buddha University,
                <br /> Gr. Noida, India
              </p>
            </div>
          </div>
        </div>

        {/* Patron */}
        <div className="row mt-5">
          <p className="text-center fw-medium fs-3">PATRON</p>
        </div>
        <div className="row p-5 justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <div
              className="p-3 shadow mb-5 bg-body-tertiary rounded text-center"
              style={{ width: 250 }}
            >
              <img
                src={dean}
                className="rounded-circle img-thumbnail"
                alt="Dean School Of Biotechnology"
              />
              <p className="fw-bold">Prof. N. P. Melkania</p>
              <p className="lh-1 fw-lighter">
                Dean School Of Biotechnology,
                <br /> Gautam Buddha University,
                <br /> Gr. Noida, India
              </p>
            </div>
          </div>
        </div>

        {/* Organizing Secretary */}
        <div className="row mt-5">
          <p className="text-center fw-medium fs-3">ORGANIZING SECRETARY</p>
        </div>
        <div className="row p-5 justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center">
            <div
              className="p-3 shadow mb-5 bg-body-tertiary rounded text-center"
              style={{ width: 250 }}
            >
              <img
                src={dean}
                className="rounded-circle img-thumbnail"
                alt="Organizing Secretary"
              />
              <p className="fw-bold">Prof. N. P. Melkania</p>
              <p className="lh-1 fw-lighter">
                Dean School Of Biotechnology,
                <br /> Gautam Buddha University,
                <br /> Gr. Noida, India
              </p>
            </div>
          </div>
        </div>

        {/* Organizing Team */}
        <div className="row mt-5">
          <p className="text-center fw-medium fs-3">ORGANIZING COMMITTEE</p>
        </div>
        <div className="row p-5 justify-content-center">
          {/* Team Members */}
          {[
            { img: oc1, name: "Dr. Nagendra Singh" },
            { img: oc2, name: "Dr. Imteyaz Qamar" },
            { img: oc3, name: "Dr. Eti Sharma" },
          ].map((member, index) => (
            <div
              className="col-md-4 d-flex flex-column align-items-center"
              key={index}
            >
              <div
                className="p-3 shadow mb-5 bg-body-tertiary rounded text-center"
                style={{ width: 250 }}
              >
                <img
                  src={member.img}
                  className="rounded-circle img-thumbnail"
                  alt={member.name}
                />
                <p className="fw-bold">{member.name}</p>
                <p className="lh-1 fw-lighter">
                  School Of Biotechnology,
                  <br /> Gautam Buddha University,
                  <br /> Gr. Noida, India
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <p className="text-center fw-medium fs-3">STUDENT TEAM</p>
        </div>
        <div className="row p-5 justify-content-center">
          {/* Team Members */}
          {[
            { img: st1, name: "Shashank Singh" },
            { img: st2, name: "Himanshu Singh" },
            { img: st3, name: "Pawni Chaudhary" },
            { img: st4, name: "Priyanshu Choudhary" },
            { img: st5, name: "Ayan Sheikh" },
            { img: st6, name: "Dhruv Yadav" },
          ].map((member, index) => (
            <div
              className="col-md-4 d-flex flex-column align-items-center"
              key={index}
            >
              <div
                className="p-3 shadow mb-5 bg-body-tertiary rounded text-center"
                style={{ width: 250 }}
              >
                <img
                  src={member.img}
                  className="rounded-circle img-thumbnail"
                  alt={member.name}
                />
                <p className="fw-bold">{member.name}</p>
                <p className="lh-1 fw-lighter">
                  School Of Biotechnology,
                  <br /> Gautam Buddha University,
                  <br /> Gr. Noida, India
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
        <div className="col-md-12 p-0">
          <Footer />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
