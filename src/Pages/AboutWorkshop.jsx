import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovingNotice from "../Components/MovingNotice";
import "../css/AboutWorkshop.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutWorkshop = () => {
  AOS.init();
  console.log(import.meta.env.VERIFY_FORM)

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div>
      <Container fluid className="m-0 p-0">
        <Row className="">
          <Col className="">
            <MovingNotice />
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col>
            <div className="container-fluid mt-5">
              <div className="text-center">
                <h1 className="fw-bold">
                  3rd National Workshop on Skill Development in Molecular
                  Biology Techniques
                </h1>
                <h4 className="text-muted">
                  University School of Biotechnology, Gautam Buddha University,
                  Greater Noida, U.P.
                </h4>
                <h4>
                  Sponsored by Society for Plant Biochemistry and Biotechnology,
                  ICAR-IARI
                </h4>
                <p className="mt-3">
                  <strong>Workshop Dates:</strong> 21st - 25th April 2025
                </p>
                <p>
                  <strong>Deadline for Registration:</strong> 15th April 2025
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1300">
                <div className="mt-4  shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <h3 className="fw-bold text-center">
                    <u>About the Workshop</u>
                  </h3>
                  <br></br>

                  <p className="fw-medium">
                    The University School of Biotechnology, Gautam Buddha
                    University, is proud to present the 3rd National Workshop on
                    Skill Development in Molecular Biology Techniques, a 5-day
                    intensive hands-on training program designed to enhance
                    practical knowledge and research skills in molecular
                    biology. This workshop is an excellent opportunity for
                    students, research scholars, faculty members, and corporate
                    professionals to gain expertise in fundamental and advanced
                    molecular biology techniques that are widely used in
                    research and industry. 🔬 Don't miss your chance to elevate
                    your research skills
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="1300">
                <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <h3 className="fw-bold text-center">Workshop Highlights</h3>
                  <p>
                    🔬 Hands-On Training in Essential Molecular Biology
                    Techniques
                  </p>
                  <ul className="fw-medium">
                    <li>
                      ✔ Practical exposure to Primer Designing for PCR
                      applications.
                    </li>
                    <li>
                      ✔ Step-by-step guidance on Polymerase Chain Reaction (PCR)
                      setup and optimization.
                    </li>
                    <li>
                      ✔ Agarose Gel Electrophoresis for DNA fragment separation
                      and visualization.
                    </li>
                  </ul>
                  <p>🧬 Gene Cloning & Screening Methods</p>
                  <ul className="fw-medium">
                    <li>
                      ✔ Molecular Gene Cloning: Inserting and expressing genes
                      in bacterial hosts.
                    </li>
                    <li>
                      ✔ Blue-White Colony Screening: Identifying successful
                      recombinant clones.
                    </li>
                    <li>
                      ✔ Plasmid Isolation & Purification for downstream
                      applications.
                    </li>
                  </ul>
                  <p>🧪 Protein & DNA Analysis Techniques</p>
                  <ul className="fw-medium">
                    <li>
                      ✔ Restriction Digestion Analysis to verify cloned DNA
                      fragments.
                    </li>
                    <li>
                      ✔ SDS-PAGE for protein separation based on molecular
                      weight.
                    </li>
                    <li>
                      ✔ High-Pressure Liquid Chromatography (HPLC) for
                      biomolecule purification and quantification.
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="1300">
                <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <h3 className="fw-bold text-center">Organizing Secretary</h3>
                  <p>
                    <strong>Organizing Secretary:</strong> Dr. Nagendra Singh,
                    Assistant Professor USobt
                  </p>
                  <p>
                    <strong>Convener:</strong>
                  </p>
                  <ul>
                    <li>Dr. Imteyaz Qamar, Assistant Professor USobt</li>
                    <li>Dr. Eti Sharma, Assistant Professor USobt</li>
                  </ul>
                  <p>
                    <strong>Co-Convener:</strong>
                  </p>
                  <ul>
                    <li>Dr. Nisha Gaur, Assistant Professor USobt</li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="1300">
                <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <h3 className="fw-bold text-center">Registration Details</h3>
                  <p>
                    <strong>🛑 Join Us – 50 Seats Only!!</strong> Register
                    early to secure your spot.
                  </p>
                  <p>💰 Registration Fees:</p>
                  <ul>
                    <li>₹3000 – Students / Research Scholars</li>
                    <li>₹5000 – Faculty</li>
                    <li>₹7000 – Corporate Professionals</li>
                  </ul>
                  <p>
                    <strong>📌 Register Online:</strong>{" "}
                    <a
                      href={`${import.meta.env.VERIFY_FORM}`}
                      target="_blank"
                    >
                      Click Here
                    </a>
                  </p>
                  <p>
                    <strong>📅 Registration Deadline: 15th April 2025</strong>{" "}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1300">
                <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <h3 className="fw-bold text-center">Contact Information</h3>
                  <p>
                    <strong>📞 Phone: </strong>9717616564, 9899914727
                  </p>
                  <p>
                    <strong>📧 Email: </strong>{" "}
                    <a href="mailto:imteyazqamar@gbu.ac.in">
                      imteyazqamar@gbu.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutWorkshop;
