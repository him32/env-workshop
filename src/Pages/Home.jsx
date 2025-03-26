import React from "react";
import MovingNotice from "../Components/MovingNotice";
import ImageSlider from "../Components/ImgSlider";
import Agbu from "../Components/Agbu";
import Asobt from "../Components/Asobt";
import Aworkshop from "../Components/Aworkshop";
import { Plide } from "../Components/Plide";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/home.css";
import Asponsor from "../Components/Asponsor";

const Home = () => {
  AOS.init();

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
    delay: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div>
      <div className="container-fluid g-0">
        <div className="row img-slider-margin ">
          <div className="col-12">
            {/* <ImageSlider /> */}
            <Plide />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <MovingNotice />
          </div>
        </div>
        <div className="row m-3 ">
          <div className="col-12">
            <div data-aos="fade-up" data-aos-duration="700">
              <Agbu />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-12">
            <div data-aos="fade-up" data-aos-duration="700">
              <Asobt />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-12">
            <div data-aos="fade-up" data-aos-duration="700">
              <Asponsor />
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-12">
            <div className="col-12">
              <div data-aos="fade-up" data-aos-duration="700">
                {" "}
                <Aworkshop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
