import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div>
        <Navigation />
        <br />
        <br />
        <div className="intro-section">
          <div className="intro-text">
            <h1>Welcome to my creative autobiography!</h1>
            <p>
              For this project, I chose to highlight my development in two
              areas: physical and personality. For each category, I chose photos
              that highlight my personal development and show some important
              moments in my life. Please feel free to enjoy seeing how I've
              grown both in both my physical body and my personality!
            </p>
          </div>
        </div>

        <div className="card-grid home-cards">
          <Link to="/physical" className="image-card hover-card">
            <img src="physical.jpg" alt="Physical Development" />
            <div className="label">Physical Development</div>
          </Link>

          <Link to="/personality" className="image-card hover-card">
            <img src="personality.jpg" alt="Personality Development" />
            <div className="label">Personality Development</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
