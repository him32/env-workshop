import { useEffect, useState } from "react";
import axios from "axios";
import gbu from "../assets/logo/gbuLogo.webp";

function VerifySuccess(props) {
  const [userName, setUserName] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");
  const [loading, setLoading] = useState(false); // State for loader

  useEffect(() => {
    if (!props.code) return;

    axios
      .get(`${import.meta.env.VITE_VERIFY_URL}/verify/getCertificateURL`, {
        params: { qr: props.code },
      })
      .then((response) => {
        console.log(response.data.certificateUrl);
        setUserName(response.data.name);
        setCertificateUrl(response.data.certificateUrl);
      })
      .catch((error) => {
        console.error("Error fetching certificate details:", error);
      });
  }, [props.code]);

  const downloadCertificate = async () => {
    if (!certificateUrl) return;

    setLoading(true); // Show loader when download starts
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_VERIFY_URL}/verify/certificate/download/${props.code}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "certificate.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading certificate:", error);
    } finally {
      setLoading(false); // Hide loader after download starts
    }
  };

  return (
    <div className="certificate-container">
      <h2>Welcome, {userName}!</h2>
      <p>
        You have successfully attended all lectures and lab sessions of the
        workshop.
      </p>

      {certificateUrl && (
        <>
          <iframe
            src={`${import.meta.env.VITE_VERIFY_URL}/verify/certificate/view/${props.code}`}
            width="50%"
            height="250px"
            style={{ border: "none" }}
            title="Certificate Preview"
          />
          <br />
          <button
            onClick={downloadCertificate}
            className="download-btn btn btn-primary"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Downloading..." : "Download Certificate"}
          </button>
        </>
      )}
    </div>
  );
}

export default VerifySuccess;
