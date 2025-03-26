import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Failure() {
  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12">
        <Alert variant="danger">
        <Alert.Heading>🚨 Oh snap! Invalid Credentials!</Alert.Heading>
        <p>
          Please check your QR code and name again. If you think this is a
          mistake, contact support.
        </p>
      </Alert>
        </div>
      </div>
      
    </div>
  );
}

export default Failure;
