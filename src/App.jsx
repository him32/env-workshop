import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Success from "./Pages/Verify_Success";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Failure from "./Pages/Failure";
import Home from "./Pages/Home";
import AboutWorkshop from "./Pages/AboutWorkshop";
import Schedule from "./Pages/Schedule";
import Committee from "./Pages/Committee";
import Verify_Cert from "./Pages/Verify_Cert";
import Verify_Success from "./Pages/Verify_Success";
import QRCheck from "./Pages/QRCheck";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Plide} from "./Components/Plide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Navbar/>

        <Routes>
          {/* <Route path="/test" element={<Test/>}/> */}
          <Route path="/verify-certificate" element={<Verify_Cert />} />
          <Route path="/verify-success" element={<Verify_Success />} />
          <Route path="/verify-success/:qr" element={<Verify_Success />} />

          <Route path="/home" element={<Home />} />
          <Route path="/plide" element={<Plide/>} />

          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />


          <Route path="/about" element={<AboutWorkshop />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/committee" element={<Committee />} />

          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/qr" element={<QRCheck />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
