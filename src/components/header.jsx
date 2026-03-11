import "./header.css";
import { useRef, useState } from "react";
import CategoriesMegaMenu from "./CategoriesMegaMenu";

const topItems = [
  "Gratis fragt over 499kr",
  "Levering 1-4 dage",
  "Hurtig ombytning",
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="10.5"
        cy="10.5"
        r="6.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15.5 15.5L20.2 20.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
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

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.2 9.2h13.6l-1.1 9.3a1.9 1.9 0 0 1-1.9 1.7H8.2a1.9 1.9 0 0 1-1.9-1.7L5.2 9.2Z"
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

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="8.8"
        r="2.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7.3 17.3c1.1-2 2.8-3 4.7-3 1.9 0 3.6 1 4.7 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openCategoriesMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsCategoriesOpen(true);
  };

  const closeCategoriesMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsCategoriesOpen(false);
    }, 180);
  };

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <div className="logo-box">
          <span className="logo-text">NØRTH</span>
        </div>

        <div className="top-bar">
          <div className="top-bar__messages">
            {topItems.map((item, index) => (
              <div className="top-bar__item-wrap" key={item}>
                <span className="top-bar__item">{item}</span>
                {index < topItems.length - 1 && (
                  <span className="top-bar__divider" />
                )}
              </div>
            ))}
          </div>

          <button className="country-button" type="button">
            <span className="country-flag" aria-hidden="true" />
            <span className="country-label">Denmark</span>
            <span className="country-chevron" aria-hidden="true">
              ▾
            </span>
          </button>
        </div>

        <nav className="nav-bar">
          <div className="nav-menu">
            <button className="nav-link" type="button">
              Nyheder
            </button>

            <div
              className="nav-item-with-menu"
              onMouseEnter={openCategoriesMenu}
              onMouseLeave={closeCategoriesMenu}
            >
              <button className="nav-link" type="button">
                Kategorier
              </button>

              <CategoriesMegaMenu isOpen={isCategoriesOpen} />
            </div>

            <button className="nav-link" type="button">
              Bestsellers
            </button>

            <button className="nav-link" type="button">
              Blog
            </button>
          </div>

          <div className="nav-actions">
            <button className="icon-button" type="button" aria-label="Søg">
              <SearchIcon />
            </button>

            <button
              className="icon-button"
              type="button"
              aria-label="Favoritter"
            >
              <HeartIcon />
            </button>

            <button className="icon-button" type="button" aria-label="Kurv">
              <BagIcon />
            </button>

            <button className="icon-button" type="button" aria-label="Profil">
              <UserIcon />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
