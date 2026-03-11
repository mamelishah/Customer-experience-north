import "./productCard.css";

function HeartIcon() {
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

function BagIcon() {
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

function ProductCard({ image, title, price, colors = [] }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={title} />

        <button
          className="product-card__favorite"
          type="button"
          aria-label={`Tilføj ${title} til favoritter`}
        >
          <HeartIcon />
        </button>
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__price-row">
          <p className="product-card__price">{price}</p>

          <button
            className="product-card__bag"
            type="button"
            aria-label={`Læg ${title} i kurven`}
          >
            <BagIcon />
          </button>
        </div>

        <div className="product-card__colors" aria-label="Farver">
          {colors.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="product-card__color"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
