import "./HeroSection.css";
import { Link } from "react-router-dom";
import heroTopVideo from "../assets/video/video1.mp4";
import heroRightVideo from "../assets/video/video2removedwithout.mp4";
import heroCenterImage from "../assets/images/centerimg2.png";
import leftImg from "../assets/images/leftimg.png";

function HeroSection() {
  return (
    <section className="hero-box">
      <div className="hero-content">
        <div className="hero-left-side">
          <div className="hero-card hero-top-left">
            <video
              className="hero-media"
              src={heroTopVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="hero-card hero-bottom-left">
            <img className="hero-media" src={leftImg} alt="Farverig strik" />
          </div>
        </div>

        <div className="hero-card hero-middle">
          <img
            className="hero-media"
            src={heroCenterImage}
            alt="Ny kollektion"
          />

          <div className="hero-text-box">
            <h1 className="hero-title">
              Udforsk den nyeste
              <br />
              forårs kollektion
            </h1>

            <Link className="hero-button" to="/produkt-oversigt">
              UDFORSK NU
            </Link>
          </div>
        </div>

        <div className="hero-card hero-right">
          <video
            className="hero-media"
            src={heroRightVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
