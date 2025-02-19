import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import MovingNotice from "../Components/MovingNotice";
import Footer from "../Components/Footer";
import { Alert, Spinner } from "react-bootstrap"; // Spinner for loading animation

const QRCheck = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get("name");
  const qr = searchParams.get("qr");

  const [vf, setVf] = useState(null); // null -> loading, true -> valid, false -> invalid
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyQR = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_VERIFY_URL}/verify?qr=${qr}&name=${name}`
        );
        console.log("Response Data:", response.data);
        setVf(true); // Set valid response
      } catch (error) {
        setVf(false); // Set invalid response
        console.error("Error fetching QR code verification:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    verifyQR();
  }, [name, qr]);

  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <MovingNotice />
      </div>
      <div className="row text-center">
        {loading ? (
          // Display Loading Spinner
          <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : vf ? (
          // If certificate is valid
          <p className="text-success fw-bold">✅ Your certificate is valid!!!</p>
        ) : (
          // If certificate is invalid
          <Alert variant="danger" dismissible>
            <Alert.Heading>🚨 Oh snap! Invalid Credentials!</Alert.Heading>
            <p>
              Please check your QR code and name again. If you think this is a mistake, contact support.
            </p>
          </Alert>
        )}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default QRCheck;
