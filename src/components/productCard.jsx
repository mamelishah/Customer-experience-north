import "./productCard.css";
import { Link } from "react-router-dom";

function HeartSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.2s-7-4.35-7-9.8A4.2 4.2 0 0 1 12 7.7a4.2 4.2 0 0 1 7 2.7c0 5.45-7 9.8-7 9.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BagSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 9h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 10V8a3 3 0 0 1 6 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProductCard({ id, image, title, price, colors = [] }) {
  return (
    <article className="card-box">
      <div className="pic-wrap">
        <Link className="pic-link" to={`/product/${id}`}>
          <img className="pic" src={image} alt={title} />
        </Link>

        <button
          className="fav-btn"
          type="button"
          aria-label={`Tilføj ${title} til favoritter`}
        >
          <HeartSvg />
        </button>
      </div>

      <div className="info-box">
        <Link className="name-link" to={`/product/${id}`}>
          <h3 className="name-text">{title}</h3>
        </Link>

        <div className="price-box">
          <p className="price-text">{price}</p>

          <button
            className="bag-btn"
            type="button"
            aria-label={`Læg ${title} i kurven`}
          >
            <BagSvg />
          </button>
        </div>

        <div className="dot-row" aria-label="Farver">
          {colors.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="dot"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;