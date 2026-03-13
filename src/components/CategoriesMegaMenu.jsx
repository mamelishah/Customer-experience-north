import "./CategoriesMegaMenu.css";

function CategoryIcon({ type }) {
  switch (type) {
    case "top":
    case "tshirt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 5.6 9.6 4h4.8L17 5.6l2.3 2.1-.9 3.3-2-.7V20H7.6v-9.7l-2 .7-.9-3.3L7 5.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.6 4c.4 1.2 1.2 1.8 2.4 1.8 1.2 0 2-.6 2.4-1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "vest":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8.5 4h7l2 2.8L16.5 20H7.5L6.5 6.8 8.5 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 4v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "skirt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 5h8l2 14H6L8 5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 5h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sweater":
    case "cardigan":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 5.6 9.6 4h4.8L17 5.6l2.3 2.1-.9 3.3-2-.7V20H7.6v-9.7l-2 .7-.9-3.3L7 5.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 4v16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "pants":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8.3 4h7.4l.8 5.2-.8 10.8h-3.3L12 13.7 11.6 20H8.3L7.5 9.2 8.3 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10.4 6.2h3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "dress":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10 4h4l1.4 4.5L19 20H5l3.6-11.5L10 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 4c.3 1 .9 1.5 2 1.5s1.7-.5 2-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "beanie":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 13a5 5 0 0 1 10 0v3H7v-3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.2v1.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="4.8"
            r="1.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );

    case "bag":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 9h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 10V8a3 3 0 0 1 6 0v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "socks":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10 4h4v8.2A3.8 3.8 0 1 1 10 16V4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "scarf":
    case "neckwarmer":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 5h8v5a4 4 0 1 1-8 0V5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 10v8M14 10v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "gloves":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 20V9.5a1 1 0 0 1 2 0V13M10 9a1 1 0 1 1 2 0v3m0-3a1 1 0 1 1 2 0v3m0-2a1 1 0 1 1 2 0V20H8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );

    case "legwarmers":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 5h4l-.8 14H7.5L8 5Zm4 0h4l.5 14h-3.7L12 5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

function CategoriesMegaMenu({ isOpen }) {
  return (
    <div className={`menu-box ${isOpen ? "menu-open" : ""}`}>
      <div className="menu-panel">
        <div className="menu-grid">
          <section className="menu-group">
            <h3 className="menu-title">Tøj</h3>

            <div className="menu-links">
              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="top" />
                </span>
                <span className="menu-text">Top</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="vest" />
                </span>
                <span className="menu-text">Vest</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="skirt" />
                </span>
                <span className="menu-text">Nederdel</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="sweater" />
                </span>
                <span className="menu-text">Sweater</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="cardigan" />
                </span>
                <span className="menu-text">Cardigan</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="pants" />
                </span>
                <span className="menu-text">Bukser</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="tshirt" />
                </span>
                <span className="menu-text">T-shirt</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="dress" />
                </span>
                <span className="menu-text">Kjole</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="vest" />
                </span>
                <span className="menu-text">Slipover</span>
              </a>

              <a href="#" className="menu-all-link">
                Se alt
              </a>
            </div>
          </section>

          <section className="menu-group">
            <h3 className="menu-title">Accessory</h3>

            <div className="menu-links">
              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="beanie" />
                </span>
                <span className="menu-text">Hue</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="bag" />
                </span>
                <span className="menu-text">Tasker</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="socks" />
                </span>
                <span className="menu-text">Sokker</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="scarf" />
                </span>
                <span className="menu-text">Tørklæde</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="gloves" />
                </span>
                <span className="menu-text">Vanter</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="legwarmers" />
                </span>
                <span className="menu-text">Benvarmere</span>
              </a>

              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <CategoryIcon type="neckwarmer" />
                </span>
                <span className="menu-text">Halsedisse</span>
              </a>

              <a href="#" className="menu-all-link">
                Se alt
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CategoriesMegaMenu;
