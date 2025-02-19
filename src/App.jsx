import { useState } from "react";
import RegistrationPage from "./Pages/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CodeVerify from "./Components/CodeVerify";
import Success from "./Pages/Verify_Success";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Failure from "./Pages/Failure";
import Home from "./Pages/Home";
import ImgSlider from "./Components/ImgSlider";
import AboutWorkshop from "./Pages/AboutWorkshop";
import Schedule from "./Pages/Schedule";
import Committee from "./Pages/Committee";
import Verify_Cert from "./Pages/Verify_Cert";
import Verify_Success from "./Pages/Verify_Success";
import QRCheck from "./Pages/QRCheck";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/test" element={<Test/>}/> */}
          <Route path="/verify-certificate" element={<Verify_Cert />} />
          <Route path="/verify-success" element={<Verify_Success />} />
          <Route path="/verify-success/:qr" element={<Verify_Success />} />

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutWorkshop />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/committee" element={<Committee />} />

          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/qr" element={<QRCheck />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
