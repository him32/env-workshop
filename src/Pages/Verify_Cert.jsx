import React from "react";
import gbu from "../assets/logo/gbuLogo.webp";
import "../css/s2.css";
import CodeVerify from "../Components/CodeVerify";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import Footer from "../Components/Footer";

const Verify_Cert = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <MovingNotice />
        </div>
        <div className="row mt-5">
          <CodeVerify />
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

export default Verify_Cert;
