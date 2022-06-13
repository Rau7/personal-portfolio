import React from "react";
import landing_pic from "../images/marek-piwnicki.jpg";
import "../css/landing.css";

function Landing() {
  return (
    <div className="landing-area">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-center landing-content">
          <h1 className="landing-header">
            Hello,
            <br className="d-xl-none" /> I'm Alp
            <p className="landing-subheader">Your Full-Stack Developer !</p>
          </h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center landing-image">
          <img src={landing_pic} alt="Alp's landing" width={400} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
