import React from "react";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import "../css/splide.css"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import p1 from "../assets/caurosell/p1.jpg";
import p2 from "../assets/caurosell/p2.jpg";
import p3 from "../assets/caurosell/p3.jpg";
import p4 from "../assets/caurosell/p4.jpg";
import p5 from "../assets/caurosell/p5.jpg";
import p6 from "../assets/caurosell/p6.jpg";
import p7 from "../assets/caurosell/p7.jpg";
import p8 from "../assets/caurosell/p8.jpg";
import p9 from "../assets/caurosell/p9.jpg";
import p10 from "../assets/caurosell/p10.jpg";
// import p1 from "../assets/caurosell/aq/p1.webp";
// import p2 from "../assets/caurosell/aq/p2.webp";
// import p3 from "../assets/caurosell/aq/p3.webp";
// import p4 from "../assets/caurosell/aq/p4.webp";
// import p5 from "../assets/caurosell/aq/p5.webp";
// import p6 from "../assets/caurosell/aq/p6.webp";
// import p7 from "../assets/caurosell/aq/p7.webp";
// import p8 from "../assets/caurosell/aq/p8.webp";
// import p9 from "../assets/caurosell/aq/p9.webp";
// import p10 from "../assets/caurosell/aq/p10.webp";

const sliderImages = [p6, p10, p7, p4, p8, p1, p3, p5, p9,p2];

export const Plide = () => {
  const options = {
    type: "loop",

    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-12 p-0">
          <div className="wrapper">
            <Splide
              options={options}
              aria-labelledby="autoplay-example-heading"
              hasTrack={false}
              style={{
                padding: "0",
              }}
            >
              <div style={{ position: "relative" }}>
                <SplideTrack>
                  {sliderImages.map((slide, index) => (
                    <SplideSlide key={index}>
                      <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "100%",
                        }}
                      />
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};
