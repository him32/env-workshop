import React from "react";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import VerifySuccess from "../Components/VerifySuccess";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Failure from "./Failure";

const Verify_Success = () => {
  const {qr}= useParams();
  console.log(qr);


  


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <MovingNotice />
        </div>
        <div className="row">
          {qr==="2500"?<Failure/>:<VerifySuccess code={qr}/>}
          {/* <VerifySuccess code={qr}/> */}
        </div>
        <div className="row">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Verify_Success;
