import React from "react";
import "./AddKitchenModal.css";

const AddKitchenModal = () => {
  return (
    <div className="add-kitchen-modal">
      <div className="left-image-section">
        <img
          src="https://placeholder.pics/svg/354x705"
          alt="Hurray!!!"
          className="left-image"
        />
        <div className="hurray-text">Hurray!!!</div>
      </div>
      <div className="form-section">
        <h2>Welcome chef!</h2>
        <div className="form-field">
          <label>Kitchen name</label>
          <input type="text" />
        </div>
        <button className="save-button">Save kitchen</button>
      </div>
    </div>
  );
};

export default AddKitchenModal;
