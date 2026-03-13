import "./productPage.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products.json";

function LeftArrow() {
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

function RightArrow() {
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

function HeartSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 19.6s-6.4-4-6.4-9a3.9 3.9 0 0 1 6.4-2.7 3.9 3.9 0 0 1 6.4 2.7c0 5-6.4 9-6.4 9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12.5l4 4 10-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoItem({ title, text, isOpen, handleClick }) {
  return (
    <div className="info-item">
      <button className="info-button" type="button" onClick={handleClick}>
        <span>{title}</span>
        <SmallArrow />
      </button>

      {isOpen && <div className="info-text">{text}</div>}
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  const foundProduct = products.find((oneProduct) => {
    return String(oneProduct.id) === String(id);
  });

  const [chosenSize, setChosenSize] = useState("");
  const [openSection, setOpenSection] = useState("");
  const [chosenImageIndex, setChosenImageIndex] = useState(0);

  if (!foundProduct) {
    return <div className="not-found-text">Produkt blev ikke fundet.</div>;
  }

  const images =
    foundProduct.gallery && foundProduct.gallery.length > 0
      ? foundProduct.gallery
      : [foundProduct.image];

  const sizeList = foundProduct.sizes || ["XS", "S", "M", "L", "XL"];

  function goToPrevImage() {
    setChosenImageIndex((oldIndex) => {
      if (oldIndex === 0) {
        return images.length - 1;
      }

      return oldIndex - 1;
    });
  }

  function goToNextImage() {
    setChosenImageIndex((oldIndex) => {
      if (oldIndex === images.length - 1) {
        return 0;
      }

      return oldIndex + 1;
    });
  }

  return (
    <section className="page-box">
      <div className="left-box">
        <div className="image-box">
          <img
            className="main-image"
            src={images[chosenImageIndex]}
            alt={foundProduct.title}
          />

          <button
            className="arrow-button arrow-left"
            type="button"
            onClick={goToPrevImage}
            aria-label="Forrige billede"
          >
            <LeftArrow />
          </button>

          <button
            className="arrow-button arrow-right"
            type="button"
            onClick={goToNextImage}
            aria-label="Næste billede"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      <div className="right-box">
        <h1 className="title-text">{foundProduct.title}</h1>

        <p className="price-text">
          Dkk{" "}
          {String(foundProduct.price).replace(" kr.", "").replace(" kr", "")}
        </p>

        <p className="small-text">Designer: {foundProduct.strikker}</p>

        <div className="color-box">
          <p className="label-text">Vælg farve</p>

          <div className="color-list">
            {(foundProduct.colors || []).map((oneColor, index) => (
              <div
                key={`${oneColor}-${index}`}
                className="color-dot"
                style={{ backgroundColor: oneColor }}
                aria-label={`Farve ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="size-box">
          <select
            className="size-select"
            value={chosenSize}
            onChange={(e) => setChosenSize(e.target.value)}
          >
            <option value="">Vælg størrelse</option>
            {sizeList.map((oneSize) => (
              <option key={oneSize} value={oneSize}>
                {oneSize}
              </option>
            ))}
          </select>
        </div>

        <div className="button-box">
          <button className="cart-button" type="button">
            Tilføj til kurv
          </button>

          <button
            className="heart-button"
            type="button"
            aria-label="Gem som favorit"
          >
            <HeartSvg />
          </button>
        </div>

        <div className="good-box">
          <div className="good-line">
            <CheckSvg />
            <span>Fri fragt indenfor 1-4 hverdage</span>
          </div>

          <div className="good-line">
            <CheckSvg />
            <span>Sikker betaling</span>
          </div>
        </div>

        <div className="info-box">
          <InfoItem
            title="Information om produkt"
            text={foundProduct.description}
            isOpen={openSection === "info"}
            handleClick={() =>
              setOpenSection(openSection === "info" ? "" : "info")
            }
          />

          <InfoItem
            title="Materiale & vaskeanvisning"
            text="Materialeoplysninger kan tilføjes senere i dit data."
            isOpen={openSection === "material"}
            handleClick={() =>
              setOpenSection(openSection === "material" ? "" : "material")
            }
          />

          <InfoItem
            title="Pasform"
            text="Pasform kan tilføjes senere i dit data."
            isOpen={openSection === "fit"}
            handleClick={() =>
              setOpenSection(openSection === "fit" ? "" : "fit")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
