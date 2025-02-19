import { useState } from "react";
import "../css/DownloadBtn.css";

export default function DownloadBtn() {
  const [success, setSuccess] = useState(false);

  const handleDownload = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 10000); // Reset after 10 seconds
  };

  return (
    <div className="container">
      {!success ? (
        <button className="btn" onClick={handleDownload}>
          <i className="fas fa-arrow-alt-circle-down"></i>
          <span className="txt">Download</span>
        </button>
      ) : (
        <div id="success">
          <a href="#" onClick={() => setSuccess(false)}>
            <i className="fas fa-times-circle"></i>
          </a>
          <div className="status">
            <i className="fas fa-check"></i>
            <span className="txt">Done</span>
          </div>
          <div className="loader">
            <div className="bar"></div>
          </div>
        </div>
      )}
    </div>
  );
}
