import React from "react";
import "./SignInModal.css";

const SignInModal = () => {
  return (
    <div className="sign-in-modal">
      <div className="left-image-section">
        <img
          src="https://placeholder.pics/svg/354x705"
          alt="Welcome"
          className="left-image"
        />
        <div className="welcome-text">Welcome</div>
      </div>
      <div className="sign-in-form">
        <h2>Sign in</h2>
        <div className="form-field">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="sign-in-button">Sign in</button>
      </div>
    </div>
  );
};

export default SignInModal;
