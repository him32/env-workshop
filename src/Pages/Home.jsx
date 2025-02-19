import React from "react";
import Navbar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovingNotice from "../Components/MovingNotice";
import ImageSlider from "../Components/ImgSlider";
import Agbu from "../Components/Agbu";
import Asobt from "../Components/Asobt";
import Aworkshop from "../Components/Aworkshop";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <div className="container-fluid g-0">
        <div className="row">
          <Navbar />
        </div>
        <div className="row m-0 p-0 g-0">
          <ImageSlider />
        </div>
        <div className="row mb-5">
          <MovingNotice />
        </div>
        <div className="row m-3 ">
          <Agbu />
        </div>
        <div className="row m-3">
          <Asobt />
        </div>
        <div className="row m-3">
          <Aworkshop />
        </div>
        <div className="row ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
