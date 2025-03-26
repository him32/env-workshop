import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import '../css/forms.css';

const CodeVerify = () => {
  const [formData, setFormData] = useState({ name: "", qr: "" });
  const [showError, setShowError] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA");
      return;
    }

    setLoading(true); // Start loading
    //console.log("Entered QR Code:", formData.qr);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_VERIFY_URL}/verify?qr=${formData.qr}&name=${formData.name}`
      );
   

      // console.log("Response Data:", response.data);
      navigate(`/verify-success/${formData.qr}`);
    } catch (error) {
      //console.error("Error fetching QR code verification:", error);
      setShowError(true);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mt-4">
      {showError && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Oh snap! Invalid QR Code!</strong> Please enter a valid QR code and try again.
          <button type="button" className="btn-close" onClick={() => setShowError(false)} aria-label="Close"></button>
        </div>
      )}
      
      <div className="p-4 border rounded shadow-sm bg-light">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* QR Code Field */}
          <div className="mb-3">
            <label className="form-label">Enter Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Code"
              name="qr"
              value={formData.qr}
              onChange={handleChange}
              required
            />
          </div>

          {/* Google reCAPTCHA */}
          <div className="mb-3">
            <ReCAPTCHA
              sitekey="6LcxANkqAAAAAB2mbLr8imcjkNvEaIZAHCKxG5wm"
              onChange={handleCaptcha}
            />
          </div>

          {/* Submit Button with Loader */}
          <button type="submit" className="btn btn-primary w-100" disabled={!captchaVerified || loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CodeVerify;
