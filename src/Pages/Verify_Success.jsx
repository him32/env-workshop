import React from "react";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import VerifySuccess from "../Components/VerifySuccess";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Failure from "./Failure";

const Verify_Success = () => {
  const { qr } = useParams();
  console.log(qr);

  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-md-12">
            <MovingNotice />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{<VerifySuccess code={qr} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Verify_Success;
