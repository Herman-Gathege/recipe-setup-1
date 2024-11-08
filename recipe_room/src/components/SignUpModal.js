
import React from "react";
import "./SignUpModal.css";

const SignUpModal = () => {
  return (
    <div className="sign-up-modal">
      <div className="left-image-section">
        <img
          src="https://placeholder.pics/svg/354x705"
          alt="Join Today"
          className="left-image"
        />
        <div className="join-text">Join Today</div>
      </div>
      <div className="sign-up-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <div className="form-field">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-field">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="form-field">
          <label>Re-enter password</label>
          <input type="password" />
        </div>
        <div className="terms">
          <input type="checkbox" />
          <label>I have read and agree to terms of service and privacy policy.</label>
        </div>
        <button className="sign-up-button">Sign Up</button>
        <div className="or">Or</div>
        <div className="social-sign-up">
          <button className="google-button">
            <img src="https://placeholder.pics/svg/24x24" alt="Google" />
            Sign Up with Google
          </button>
          <button className="facebook-button">
            <img src="https://placeholder.pics/svg/24x24" alt="Facebook" />
            Sign Up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;