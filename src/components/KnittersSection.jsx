import "./KnittersSection.css";
import knitters from "../assets/data/knitters.json";

function KnittersSection() {
  return (
    <section className="knitters-section">
      <h2 className="knitters-section__title">Mød vores strikkere</h2>

      <div className="knitters-grid">
        {knitters.map((knitter, index) => (
          <a
            key={knitter.id}
            href="#"
            className={`knitter-circle knitter-circle--${index + 1}`}
            aria-label={`${knitter.name}, ${knitter.age} år. ${knitter.linkText}`}
          >
            <img
              src={knitter.image}
              alt={knitter.name}
              className="knitter-circle__image"
            />

            <span className="knitter-circle__text">
              {`${knitter.name}, ${knitter.age} år\n${knitter.linkText}`}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default KnittersSection;
