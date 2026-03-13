import { useRef } from "react";
import "./NewsSections.css";

import ProductCard from "./productCard";
import productsList from "../assets/data/products.json";

function LeftArrowIcon() {
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

function RightArrowIcon() {
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
  const sliderBoxRef = useRef(null);

  function moveLeft() {
    sliderBoxRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  }

  function moveRight() {
    sliderBoxRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  }

  return (
    <section className="news-box">
      <h2 className="news-title">NYHEDER</h2>

      <div className="slider-wrap">
        <button
          className="arrow-button arrow-left"
          type="button"
          onClick={moveLeft}
          aria-label="Forrige produkter"
        >
          <LeftArrowIcon />
        </button>

        <div className="slider-box" ref={sliderBoxRef}>
          {productsList.map((oneProduct) => (
            <div className="slider-item" key={oneProduct.id}>
              <ProductCard
                id={oneProduct.id}
                image={oneProduct.image}
                title={oneProduct.title}
                price={oneProduct.price}
                colors={oneProduct.colors || []}
              />
            </div>
          ))}
        </div>

        <button
          className="arrow-button arrow-right"
          type="button"
          onClick={moveRight}
          aria-label="Næste produkter"
        >
          <RightArrowIcon />
        </button>
      </div>
    </section>
  );
}

export default NewsSection;
