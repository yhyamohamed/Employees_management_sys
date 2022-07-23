import React from "react";
import { useNavigate } from "react-router-dom";
import "../landing.css";



function LandingPage(props) {
  const navigate = useNavigate();

function goToLogin() {
  navigate("/login");
}

  return (
    <div className="wrap">
      <div id="contain" onClick={goToLogin}>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
