import Navigation from "../components/Navigation";
import "./PhysicalPage.css";

function PhysicalPage() {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <div className="intro-section">
        <div className="intro-text">
          <h1>My Physical Development Across My Life</h1>
          <p>
            Below are pictures showing how I've changed physically over my life!
          </p>
        </div>
        <img
          src="physical_dev.jpg"
          alt="Bride smiling"
          className="intro-photo"
        />
      </div>

      <div className="card-grid">
        <div className="image-card static-card">
          <img src="0.jpg" alt="Age 0" />
          <div className="label">Newborn</div>
        </div>
        <div className="image-card static-card">
          <img src="0.5.jpg" alt="Age 6 months" />
          <div className="label">6 months</div>
        </div>
        <div className="image-card static-card">
          <img src="1.jpg" alt="Age 1" className="objpos-top" />
          <div className="label">1 year old</div>
        </div>
        <div className="image-card static-card">
          <img src="2.jpg" alt="Age 2" />
          <div className="label">2 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="3.jpg" alt="Age 3" className="objpos-top" />
          <div className="label">3 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="4.jpg" alt="Age 4" />
          <div className="label">4 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="5.jpg" alt="Age 5" className="objpos-top" />
          <div className="label">5 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="6.jpg" alt="Age 6" />
          <div className="label">6 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="7.jpg" alt="Age 7" className="objpos-top" />
          <div className="label">7 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="8.jpg" alt="Age 8" className="objpos-top" />
          <div className="label">8 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="9.jpg" alt="Age 9" />
          <div className="label">9 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="10.jpg" alt="Age 10" className="objpos-top" />
          <div className="label">10 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="11.jpg" alt="Age 11" className="objpos-top" />
          <div className="label">11 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="12.jpg" alt="Age 12" />
          <div className="label">12 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="13.jpg" alt="Age 13" className="objpos-top" />
          <div className="label">13 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="14.jpg" alt="Age 14" />
          <div className="label">14 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="15.jpg" alt="Age 15" />
          <div className="label">15 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="16.jpg" alt="Age 16" />
          <div className="label">16 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="17.jpg" alt="Age 17" className="objpos-top" />
          <div className="label">17 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="18.jpg" alt="Age 18" />
          <div className="label">18 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="19.jpg" alt="Age 19" />
          <div className="label">19 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="20.jpg" alt="Age 20" />
          <div className="label">20 years old</div>
        </div>
        <div className="image-card static-card">
          <img src="21.jpg" alt="Age 21" className="objpos-top" />
          <div className="label">21 years old</div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalPage;
