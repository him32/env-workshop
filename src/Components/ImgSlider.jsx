import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../css/app.css";
import p1 from "../assets/caurosell/p1.png";
import p2 from "../assets/caurosell/p2.png";
import p3 from "../assets/caurosell/p3.png";
import p4 from "../assets/caurosell/p4.png";
import p5 from "../assets/caurosell/p5.png";
import p6 from "../assets/caurosell/p6.png";
import p7 from "../assets/caurosell/p7.png";
import p8 from "../assets/caurosell/p8.png";
import p9 from "../assets/caurosell/9.png";

const sliderImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

export default function ImageSlider() {
  const [activeImageNum, setActiveImageNum] = useState(0);
  const length = sliderImages.length;

  const nextSlide = () => {
    setActiveImageNum((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveImageNum((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // ✅ Auto-slide effect with `setTimeout`
  useEffect(() => {
    const slideInterval = setTimeout(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(slideInterval); // Cleanup function
  }, [activeImageNum]);

  if (sliderImages.length === 0) {
    return null;
  }

  return (
    <div className="container-fluid image-slider g-0 overflow-hidden">
      <div className="row m-0 p-0 position-relative">
        <div className="col-md-12 m-0 p-0 g-0">
          {/* Left Arrow */}
          <div className="left arrow" onClick={prevSlide}>
            <ArrowBackIosIcon />
          </div>

          {/* Right Arrow */}
          <div className="right arrow" onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </div>

          {/* Image Slider */}
          {sliderImages.map((currentSlide, ind) => (
            <div
              key={ind}
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
            >
              {ind === activeImageNum && (
                <img
                  src={currentSlide}
                  className="img-fluid"
                  alt={`Slide ${ind + 1}`}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              )}
            </div>
          ))}

          {/* ✅ Bottom Indicators */}
          <div className="indicators">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === activeImageNum ? "active" : "indicator-inactive"
                }`}
                onClick={() => setActiveImageNum(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
