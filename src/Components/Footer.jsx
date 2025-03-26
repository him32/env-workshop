import React from "react";
import { TbPhoneCalling } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-3  bg-dark text-white ">
          <div className="col-md-6 border-sm-0 border-end-sm border-secondary p-5">
            <div className="row">
              <p className="fs-2">Contact us</p>
            </div>
            <div className="row lh-sm">
              <p className="fs-6">Dr. Imteyaz Qamar</p>
              <p className="fs-6">ORGANIZING COMMITTEE</p>
              <p className="fs-6">
                <TbPhoneCalling /> +91 9711761564
              </p>
              <p className="fs-6">
                <TbPhoneCalling /> +91 9899914727
              </p>
              <p className="fs-6">
                <MdAlternateEmail />{" "}
                <Link to="mailto:imteyazqamar@gbu.ac.in">
                  imteyazqamar@gbu.ac.in
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.4528860913524!2d77.52280161276946!3d28.419568738258913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0ffb7b9fa2f%3A0x49291cecad124e5!2sSchool%20of%20Biotechnology!5e1!3m2!1sen!2sin!4v1739887367372!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "5px solid black" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row p-3  bg-black text-white">
          <div className="col-md-6 p-0 mb-0 ">
            <p className="text-center fs-5 ">
              Designed & Developed By{" "}
              <Link to="https://www.linkedin.com/in/profile-him32">
                Himanshu Singh
              </Link>{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
          <a href="https://www.buymeacoffee.com/him32singhx" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" style={{height: 60, width: 217 }} /></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
