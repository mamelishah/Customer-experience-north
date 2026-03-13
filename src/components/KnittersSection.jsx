import "./KnittersSection.css";
import knitterList from "../assets/data/knitters.json";

function KnittersSection() {
  return (
    <section className="knit-section-box">
      <h2 className="knit-title">MØD VORES STRIKKERE</h2>

      <div className="knit-grid">
        {knitterList.map((oneKnitter, index) => (
          <a
            key={oneKnitter.id}
            href="#"
            className={`knit-card knit-card-${index + 1}`}
            aria-label={`${oneKnitter.name}, ${oneKnitter.age} år. ${oneKnitter.linkText}`}
          >
            <img
              src={oneKnitter.image}
              alt={oneKnitter.name}
              className="knit-image"
            />

            <span className="knit-text">
              {`${oneKnitter.name}, ${oneKnitter.age} år\n${oneKnitter.linkText}`}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default KnittersSection;
