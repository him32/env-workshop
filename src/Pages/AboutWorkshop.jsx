import React from "react";
import Navbar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovingNotice from "../Components/MovingNotice";
import "../css/AboutWorkshop.css";
import Footer from "../Components/Footer";


const AboutWorkshop = () => {
  return (
    <div>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Navbar />
          </Col>
        </Row>

        <Row className="">
          <Col className="">
            <MovingNotice />
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col>
            <div className="container-fluid mt-3">
              <div className="text-center">
                <h1 className="fw-bold">
                  3rd National Workshop on Skill Development in Molecular
                  Biology Techniques
                </h1>
                <h4 className="text-muted">
                  University School of Biotechnology, Gautam Buddha University,
                  Greater Noida, U.P.
                </h4>
                <p className="mt-3">
                  <strong>Workshop Dates:</strong> 15th - 19th April 2025
                </p>
                <p>
                  <strong>Deadline for Registration:</strong> 5th April 2025
                </p>
              </div>

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
                  practical knowledge and research skills in molecular biology.
                  This workshop is an excellent opportunity for students,
                  research scholars, faculty members, and corporate
                  professionals to gain expertise in fundamental and advanced
                  molecular biology techniques that are widely used in research
                  and industry. 🔬 Don't miss your chance to elevate your
                  research skills
                </p>
              </div>

              <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <h3 className="fw-bold text-center">Workshop Highlights</h3>
                <p>
                  Participants will receive hands-on training in the following
                  molecular biology techniques:
                </p>
                <ul className="fw-medium">
                  <li>
                    ✔ Plasmid Isolation and Purification – Learn the methods for
                    extracting and purifying plasmid DNA.
                  </li>
                  <li>
                    ✔ Nucleic Acid Quantification – Understand
                    spectrophotometric and fluorometric techniques for accurate
                    quantification.
                  </li>
                  <li>
                    ✔ Primer Design for Cloning and Expression – Gain expertise
                    in designing primers for PCR and gene cloning applications.
                  </li>
                  <li>
                    ✔ DNA Amplification by PCR – Perform Polymerase Chain
                    Reaction (PCR) for amplifying DNA sequences.
                  </li>
                  <li>
                    ✔ Agarose Gel Electrophoresis – Analyze nucleic acids using
                    gel electrophoresis techniques.
                  </li>
                </ul>
                <p>
                  Participants will receive hands-on training in the following
                  molecular biology techniques:
                </p>
              </div>

              <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <h3 className="fw-bold text-center">Organizing Committee</h3>
                <p>
                  <strong>Organizing Secretary:</strong> Dr. Imteyaz Qamar
                </p>
                <p>
                  <strong>Organizing Team:</strong>
                </p>
                <ul>
                  <li>Dr. Nagendra Singh</li>
                  <li>Dr. Imteyaz Qamar</li>
                  <li>Dr. Eti Sharma</li>
                </ul>
              </div>

              <div className="mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <h3 className="fw-bold text-center">Registration Details</h3>
                <p>
                  <strong>🛑 Limited seats available!</strong> Register early to
                  secure your spot.
                </p>
                <p>💰 Registration Fees:</p>
                <ul>
                  <li>₹2500 – Students / Research Scholars</li>
                  <li>₹3500 – Faculty</li>
                  <li>₹5000 – Corporate Professionals</li>
                </ul>
                <p>
                  <strong>📌 Register Online:</strong>{" "}
                  <a href="https://forms.gle/YAbB24SFNZy1RNn9" target="_blank">
                    Click Here
                  </a>
                </p>
                <p>
                  <strong>📅 Registration Deadline: 5th April 2025</strong>{" "}
                </p>
              </div>

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
          </Col>
        </Row>
        <Row>
          <Col>
          <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutWorkshop;
