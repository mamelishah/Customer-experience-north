import "./CategoriesSection.css";

import bukserImage from "../assets/images/categories/bukser.png";
import strikImage from "../assets/images/categories/bluse.png";
import accessoriesImage from "../assets/images/categories/hue.png";
import nyhederImage from "../assets/images/categories/vanter.png";

function CategoriesSection() {
  return (
    <section className="section-box" aria-labelledby="section-title">
      <div className="section-content">
        <h2 id="section-title" className="main-title">
          UDVALGTE KATEGORIER
        </h2>

        <ul className="grid-box">
          <li className="item-box big-left">
            <a className="item-link" href="/kategori/bukser">
              <img
                className="item-image"
                src={bukserImage}
                alt=""
                aria-hidden="true"
              />
              <div className="item-text-box">
                <h3 className="item-title">Bukser</h3>
              </div>
            </a>
          </li>

          <li className="item-box top-middle">
            <a className="item-link" href="/kategori/strik">
              <img
                className="item-image"
                src={strikImage}
                alt=""
                aria-hidden="true"
              />
              <div className="item-text-box">
                <h3 className="item-title">Strik</h3>
              </div>
            </a>
          </li>

          <li className="item-box top-right">
            <a className="item-link" href="/kategori/accessories">
              <img
                className="item-image"
                src={accessoriesImage}
                alt=""
                aria-hidden="true"
              />
              <div className="item-text-box">
                <h3 className="item-title">Accessories</h3>
              </div>
            </a>
          </li>

          <li className="item-box bottom-wide">
            <a className="item-link" href="/nyheder">
              <img
                className="item-image"
                src={nyhederImage}
                alt=""
                aria-hidden="true"
              />
              <div className="item-text-box">
                <h3 className="item-title">Nyheder</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CategoriesSection;
