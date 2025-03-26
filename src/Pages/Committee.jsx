import React from "react";
import MovingNotice from "../Components/MovingNotice";
import vc from "../assets/committee/VC.png";
import dean from "../assets/committee/660677ed82b90_niranjan.melkania.jpg";
import oc1 from "../assets/committee/nagendra.jpg";
import oc2 from "../assets/committee/iq.png";
import oc3 from "../assets/committee/Eti_ma'am.png";
import oc4 from "../assets/committee/NishaMaam.png";
import st1 from "../assets/committee/shashank.png";
import st2 from "../assets/committee/Himanshu.png";
import st3 from "../assets/committee/Pawni.png";
import st4 from "../assets/committee/Priyanshu.png";
import st5 from "../assets/committee/akash-mavi.webp";
import st6 from "../assets/committee/dhruv.png";
import st7 from "../assets/committee/paridhi.png";
import st8 from "../assets/committee/RAJ SHREE JHA.png";import st9 from "../assets/committee/barun.png";
import st10 from "../assets/committee/anushka.png";
import st11 from "../assets/committee/Ananya.png";
import st12 from "../assets/committee/Kaustubh.png";
import st13 from "../assets/committee/jyoti.png";

import AOS from "aos";
import "aos/dist/aos.css";
import EmailBtn from "../Components/EmailBtn";

const Committee = () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms

    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <MovingNotice />
        </div>

        {/* Section Header */}
        <div className="row mt-5">
          <p className="text-center fw-bold fs-1">COMMITTEE</p>
        </div>

        {/* Chief Patron */}
        <div data-aos="fade-up" data-aos-duration="1300">
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
                <p className="fw-bold">Prof. Rana Pratap Singh</p>
                <p className="lh-1 fw-lighter">
                  Vice Chancellor,
                  <br /> Gautam Buddha University,
                  <br /> Gr. Noida, India
                </p>
                <p className="d-flex justify-content-center">
                  <EmailBtn email="vc@gbu.ac.in" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Patron */}
        <div data-aos="fade-up" data-aos-duration="1300">
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
                  Professor and Dean
                  <br /> School Of Biotechnology,
                  <br /> Gautam Buddha University,
                  <br /> Gr. Noida, India
                </p>
                <p className="d-flex justify-content-center">
                  <EmailBtn email="niranjan.melkania@gbu.ac.in" />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Organizing Secretary */}
        <div data-aos="fade-up" data-aos-duration="1300">
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
                  src={oc1}
                  className="rounded-circle img-thumbnail"
                  alt="Organizing Secretary"
                />
                <p className="fw-bold">Dr. Nagendra Singh</p>
                <p className="lh-1 fw-lighter">
                  Assistant Professor
                  <br />
                  School Of Biotechnology,
                  <br /> Gautam Buddha University,
                  <br /> Gr. Noida, India
                </p>
                <p className="d-flex justify-content-center">
                  <EmailBtn email="nagendra@gbu.ac.in" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONVENERS */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="row mt-5">
            <p className="text-center fw-medium fs-3">CONVENERS</p>
          </div>
          <div className="row p-5 justify-content-center">
            {/* Team Members */}
            {[
              {
                img: oc2,
                name: "Dr. Imteyaz Qamar",
                email: "imteyazqamar@gbu.ac.in",
              },
              {
                img: oc3,
                name: "Dr. Eti Sharma",
                email: "etisharma.ocfd@gbu.ac.in",
              }
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
                    Assistant Professor
                    <br />
                    School Of Biotechnology,
                    <br /> Gautam Buddha University,
                    <br /> Gr. Noida, India
                  </p>
                  <p className="d-flex justify-content-center">
                  <EmailBtn email={member.email} />
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*CO CONVENERS */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="row mt-5">
            <p className="text-center fw-medium fs-3">CO-CONVENER</p>
          </div>
          <div className="row p-5 justify-content-center">
            {/* Team Members */}
            {[
             
              {
                img: oc4,
                name: "Dr. Nisha Gaur",
                email: "nishagaur.ocfd@gbu.ac.in",
              },
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
                    Assistant Professor
                    <br />
                    School Of Biotechnology,
                    <br /> Gautam Buddha University,
                    <br /> Gr. Noida, India
                  </p>
                  <p className="d-flex justify-content-center">
                  <EmailBtn email={member.email} />
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="row mt-5">
            <p className="text-center fw-medium fs-3">STUDENT TEAM</p>
          </div>
          <div className="row p-5 justify-content-center">
            {/* Team Members */}
            {[
              { img: st1, name: "Shashank Singh" },
              { img: st2, name: "Himanshu Singh" },
              { img: st3, name: "Pawni Chaudhary" },
              { img: st7, name: "Paridhi Sharma" },
              { img: st4, name: "Priyanshu Choudhary" },
              { img: st5, name: "Akash Mavi" },
              { img: st6, name: "Dhruv Yadav" },
              { img: st13, name: "Jyoti Singh" },
              { img: st9, name: "Barun Mukherjee" },
              { img: st10, name: "Anushka Srivastava" },
              { img: st12, name: "Kaustubh Asthana" },
              { img: st8, name: "Raj Shree Jhaa" },
              { img: st11, name: "Ananya Kulshrestha" },
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
        </div>
      </div>
    </div>
  );
};

export default Committee;
