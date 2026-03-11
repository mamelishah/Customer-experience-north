import { useRef } from "react";
import "./newsSections.css";

import ProductCard from "./productCard";
import products from "../assets/data/products.json";

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 5.5 8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.5 5.5 16 12l-6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NewsSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="news-section">
      <h2 className="news-section__title">NYHEDER</h2>

      <div className="news-section__slider-wrap">
        <button
          className="news-section__arrow news-section__arrow--left"
          type="button"
          onClick={scrollLeft}
          aria-label="Forrige produkter"
        >
          <ArrowLeftIcon />
        </button>

        <div className="news-section__slider" ref={sliderRef}>
          {products.map((product) => (
            <div className="news-section__item" key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                colors={product.colors}
              />
            </div>
          ))}
        </div>

        <button
          className="news-section__arrow news-section__arrow--right"
          type="button"
          onClick={scrollRight}
          aria-label="Næste produkter"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}

export default NewsSection;
