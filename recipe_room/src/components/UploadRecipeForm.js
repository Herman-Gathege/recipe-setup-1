
import React from "react";
import "./UploadRecipeForm.css";

const UploadRecipeForm = () => {
  return (
    <div className="upload-recipe-form">
      <div className="left-image-section">
        <img
          src="https://placeholder.pics/svg/354x763"
          alt="Yam Yam!"
          className="left-image"
        />
        <div className="yam-yam-text">Yam Yam!</div>
      </div>
      <div className="form-section">
        <h2>Upload recipe</h2>
        <div className="form-field">
          <label>Recipe Name</label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Upload Image</label>
          <input type="file" />
        </div>
        <div className="form-field">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Steps to follow</label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Pick Your Country</label>
          <input type="text" />
        </div>
        <div className="form-field">
          <label>Add kitchen name</label>
          <input type="text" />
        </div>
        <div className="checkbox-field">
          <input type="checkbox" />
          <label>Checking the box will allow others to edit your recipe.</label>
        </div>
        <button className="upload-button">Upload Recipe</button>
      </div>
    </div>
  );
};

export default UploadRecipeForm;