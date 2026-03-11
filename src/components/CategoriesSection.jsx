import "./CategoriesSection.css";

import bukserImage from "../assets/images/categories/bukser.png";
import strikImage from "../assets/images/categories/bluse.png";
import accessoriesImage from "../assets/images/categories/hue.png";
import nyhederImage from "../assets/images/categories/vanter.png";

function CategoriesSection() {
  return (
    <section
      className="categories-section"
      aria-labelledby="categories-section-title"
    >
      <div className="categories-container">
        <h2 id="categories-section-title" className="categories-title">
          UDVALGTE KATEGORIER
        </h2>

        <ul className="categories-grid">
          <li className="category-card category-card--large-left">
            <a className="category-card__link" href="/kategori/bukser">
              <img
                className="category-card__image"
                src={bukserImage}
                alt=""
                aria-hidden="true"
              />
              <div className="category-card__overlay">
                <h3 className="category-card__title">Bukser</h3>
              </div>
            </a>
          </li>

          <li className="category-card category-card--top-middle">
            <a className="category-card__link" href="/kategori/strik">
              <img
                className="category-card__image"
                src={strikImage}
                alt=""
                aria-hidden="true"
              />
              <div className="category-card__overlay">
                <h3 className="category-card__title">Strik</h3>
              </div>
            </a>
          </li>

          <li className="category-card category-card--top-right">
            <a className="category-card__link" href="/kategori/accessories">
              <img
                className="category-card__image"
                src={accessoriesImage}
                alt=""
                aria-hidden="true"
              />
              <div className="category-card__overlay">
                <h3 className="category-card__title">Accessories</h3>
              </div>
            </a>
          </li>

          <li className="category-card category-card--bottom-wide">
            <a className="category-card__link" href="/nyheder">
              <img
                className="category-card__image"
                src={nyhederImage}
                alt=""
                aria-hidden="true"
              />
              <div className="category-card__overlay">
                <h3 className="category-card__title">Nyheder</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CategoriesSection;
