import "./HeroSection.css";
import heroTopVideo from "../assets/video/video1.mp4";
import heroRightVideo from "../assets/video/video2removedwithout.mp4";
import heroCenterImage from "../assets/images/centerimg2.png";
import leftImg from "../assets/images/leftimg.png";

function HeroSection() {
  return (
    <section className="hero-wrap">
      <div className="hero-grid">
        <div className="hero-left-stack">
          <div className="hero-card hero-card--left-top">
            <video
              className="hero-media"
              src={heroTopVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="hero-card hero-card--left-bottom">
            <img className="hero-media" src={leftImg} alt="Farverig strik" />
          </div>
        </div>

        <div className="hero-card hero-card--center">
          <img
            className="hero-media"
            src={heroCenterImage}
            alt="Ny kollektion"
          />

          <div className="hero-overlay">
            <h1 className="hero-title">
              Udforsk den nyeste
              <br />
              forårs kollektion
            </h1>

            <button className="hero-button" type="button">
              UDFORSK NU
            </button>
          </div>
        </div>

        <div className="hero-card hero-card--right">
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
