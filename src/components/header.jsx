import "./Header.css";
import { useRef, useState } from "react";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { Link } from "react-router-dom";

function SearchSvg() {
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

function BagSvg() {
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

function UserSvg() {
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
  const [showCategories, setShowCategories] = useState(false);
  const timeoutRef = useRef(null);

  function openMenu() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCategories(true);
  }

  function closeMenu() {
    timeoutRef.current = setTimeout(() => {
      setShowCategories(false);
    }, 180);
  }

  return (
    <header className="header-box">
      <div className="header-content">
        <Link className="header-logo-box" to="/">
          <span className="header-logo-text">NØRTH</span>
        </Link>

        <div className="header-top">
          <div className="header-messages">
            <div className="header-message-box">
              <span className="header-message-text">
                Gratis fragt over 499kr
              </span>
              <span className="header-line" />
            </div>

            <div className="header-message-box">
              <span className="header-message-text">Levering 1-4 dage</span>
              <span className="header-line" />
            </div>

            <div className="header-message-box">
              <span className="header-message-text">Hurtig ombytning</span>
            </div>
          </div>

          <button className="header-country-button" type="button">
            <span className="header-flag" aria-hidden="true" />
            <span className="header-country-text">Denmark</span>
            <span className="header-arrow-down" aria-hidden="true">
              ▾
            </span>
          </button>
        </div>

        <nav className="header-nav">
          <div className="header-links">
            <button className="header-link" type="button">
              Nyheder
            </button>

            <div
              className="header-menu-box"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button className="header-link" type="button">
                Kategorier
              </button>

              <CategoriesMegaMenu isOpen={showCategories} />
            </div>

            <Link className="header-link" to="/produkt-oversigt">
              Bestseller
            </Link>

            <button className="header-link" type="button">
              Blog
            </button>
          </div>

          <div className="header-icons">
            <button
              className="header-icon-button"
              type="button"
              aria-label="Søg"
            >
              <SearchSvg />
            </button>

            <button
              className="header-icon-button"
              type="button"
              aria-label="Favoritter"
            >
              <HeartSvg />
            </button>

            <button
              className="header-icon-button"
              type="button"
              aria-label="Kurv"
            >
              <BagSvg />
            </button>

            <button
              className="header-icon-button"
              type="button"
              aria-label="Profil"
            >
              <UserSvg />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
