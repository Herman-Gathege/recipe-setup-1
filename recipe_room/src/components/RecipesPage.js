import React from "react";
import "./RecipesPage.css";

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
      <div className="hero-content">
        <h1>Top pick this week</h1>
        <h2>How to make egg fried rice</h2>
        <button className="join-button">
          Join Us Today <img src="https://placeholder.pics/svg/24x24" alt="Arrow" />
        </button>
      </div>
      <div className="hero-image">
        <img src="https://placeholder.pics/svg/374x450" alt="Egg Fried Rice" />
      </div>
    </section>
  );
};

const Filters = () => {
  const categories = [
    "Favourites",
    "Most Liked",
    "Countries",
    "New Recipes",
    "Kitchen collab",
    "Editors Pick",
  ];

  return (
    <div className="filters">
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img 
        src="https://placeholder.pics/svg/24x24" 
        alt="Search Icon" 
        className="search-icon"
      />
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search"
      />
    </div>
  );
};

const RecipeCard = ({ title, ratings, views, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <div className="ratings">
          <span>{ratings} ratings</span>
          <div className="stars">★★★★☆</div>
        </div>
        <p>{views} people viewed</p>
        <div className="card-actions">
          <div><img src="https://placeholder.pics/svg/24x24" alt="Comment" />Comment</div>
          <div><img src="https://placeholder.pics/svg/24x24" alt="Save" />Save</div>
          <div><img src="https://placeholder.pics/svg/24x24" alt="Share" />Share</div>
        </div>
      </div>
    </div>
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

function RecipesPage() {
  const recipes = [
    {
      title: "Mojito mocktail recipe",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to make chapaiz fam",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to cook intestines",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "Tasty garlic butter thighs",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "English fish and chips recipe",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to make air fried pork ribs",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
  ];

  return (
    <div className="recipes-page">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Filters />
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default RecipesPage;

