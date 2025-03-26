import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/MovingNotice.css"; // Import external CSS file

const MovingNotice = () => {
  return (
    <div className="bg-warning">
      <p className="text-center fs-4 moving-text align-baseline">
        Registration started!! 🔥{" "}
        <a
          href={`${import.meta.env.VITE_VERIFY_FORM}`}
          target="_blank"
          className="link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          Click Here to fill form!!
        </a>
      </p>
    </div>
  );
};

export default MovingNotice;
