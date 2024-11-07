import React from "react";
import "./RecipeInfoPage.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://placeholder.pics/svg/70x59" alt="Logo" />
        <span className="logo-text">Recipe Room</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Recipes</li>
        <li>About us</li>
      </ul>
      <div className="nav-buttons">
        <button className="signup">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img 
        src="https://placeholder.pics/svg/547x599" 
        alt="Recipe"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>How to make Egg fried Rice</h1>
        <p>Brief Description</p>
        {/* Add more detailed description or relevant content here */}
      </div>
    </section>
  );
};

const RecipeSteps = () => {
  const ingredients = [
    "2 cups of cooked rice (preferably cold, leftover rice works best)",
    "2 eggs",
    "2 tablespoons vegetable oil",
    "1/2 cup chopped green onions (or regular onions)",
    "1/2 cup frozen peas and carrots (optional)",
    "2 tablespoons soy sauce (or more to taste)",
    "1 clove garlic, minced (optional)",
    "Salt and pepper to taste",
  ];

  return (
    <section className="recipe-steps">
      <h2>Steps to follow</h2>
      <div className="steps-content">
        <h3>Simple Egg Fried Rice Recipe</h3>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-section">
        <p>Join us to get latest updates on upcoming events.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
        <p>By signing up you agree to our privacy policies.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Navigate</h4>
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h4>Official</h4>
          <ul>
            <li>Privacy</li>
            <li>Accessibility</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Recipe Room</li>
            <li>Recipe Room</li>
            <li>RecipeRoom@gmail.com</li>
            <li>+254700976984</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

function RecipeInfoPage() {
  return (
    <div className="recipe-info-page">
      <Navbar />
      <HeroSection />
      <RecipeSteps />
      <Footer />
    </div>
  );
}

export default RecipeInfoPage;

