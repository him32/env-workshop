import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/MovingNotice.css"; // Import external CSS file

const MovingNotice = () => {
  return (
    <div className="bg-warning">
      <p className="text-center fs-4 moving-text align-baseline">
        Registration will start soon! 🔥
      </p>
    </div>
  );
};

export default MovingNotice;
