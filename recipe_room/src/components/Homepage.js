
import React from 'react';
import '../App.css'; // Correct if App.css is in the src folder


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://placeholder.pics/svg/70x59" alt="Logo" />
                <span className="logo-text">Recipe Room</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <div className="navbar-buttons">
                <button className="signup">Sign up</button>
                <button className="login">Login</button>
            </div>
        </nav>
    );
}

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="content">
                <h1>Where Taste Meets Perfection.</h1>
                <p>Let your Cooking find its way to new heights by posting in this global kitchen.</p>
                <div className="buttons">
                    <button className="join-btn">Join Us Today</button>
                    <button className="view-btn">View recipes</button>
                </div>
            </div>
            <div className="image">
                <img src="https://placeholder.pics/svg/400x500" alt="Cooking" />
            </div>
        </section>
    );
}

function SearchBar() {
    return (
        <div className="search-bar">
            <img src="https://placeholder.pics/svg/24x24" alt="Search Icon" className="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
        </div>
    );
}

function FilterBar() {
    const filters = ['Favourites', 'Most Liked', 'Countries', 'New Recipes', 'Kitchen collab', 'Price', 'Editors Pick'];

    return (
        <div className="filter-bar">
            {filters.map((filter, index) => (
                <button key={index} className="filter-button">
                    {filter}
                </button>
            ))}
        </div>
    );
}

function RecipeCard({ title, ratings, views, image }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-image" />
            <div className="recipe-content">
                <h3 className="recipe-title">{title}</h3>
                <div className="ratings-container">
                    <span className="rating-text">{ratings} ratings</span>
                    <div className="stars">
                        {'★'.repeat(5)}
                    </div>
                </div>
                <p className="people-viewed">{views} people viewed</p>
                <div className="actions">
                    <div className="action">
                        <img src="https://placeholder.pics/svg/24x24" alt="Comment Icon" />
                        <span>Comment</span>
                    </div>
                    <div className="action">
                        <img src="https://placeholder.pics/svg/24x24" alt="Save Icon" />
                        <span>Save</span>
                    </div>
                    <div className="action">
                        <img src="https://placeholder.pics/svg/24x24" alt="Share Icon" />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Join us to get latest updates on upcoming events.</h3>
                <div className="subscribe">
                    <input type="email" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
                <p>By signing up you agree to our privacy policies.</p>
            </div>

            <div className="footer-links">
                <div className="footer-column">
                    <h4>Navigate</h4>
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">About Us</a>
                </div>

                <div className="footer-column">
                    <h4>Official</h4>
                    <a href="#">Privacy</a>
                    <a href="#">Accessibility</a>
                    <a href="#">FAQs</a>
                    <a href="#">Terms</a>
                    <a href="#">Contacts</a>
                </div>

                <div className="footer-column">
                    <h4>Social</h4>
                    <a href="#">Recipe Room</a>
                    <a href="#">Recipe Room</a>
                    <a href="#">RecipeRoom@gmail.com</a>
                    <a href="#">+254700076984</a>
                </div>
            </div>
        </footer>
    );
}

function Homepage() {
    const recipes = [
        {
            title: "Omena on coconut sauce recipe",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        },
        {
            title: "How to make pwani biriyani",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        },
        {
            title: "How to make egg fried rice",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        },
        {
            title: "Homemade chorizo pizza",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        },
        {
            title: "Tasty iced latte tips",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        },
        {
            title: "Pecan caramel cake made easy",
            ratings: "4.5",
            views: "200",
            image: "https://placeholder.pics/svg/368x404"
        }
    ];

    return (
        <div className="homepage">
            <Navbar />
            <HeroSection />
            <SearchBar />
            <FilterBar />
            <div className="recipes-grid">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} {...recipe} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;