import "./CategoriesMegaMenu.css";

const categoryGroups = [
  {
    id: "toj",
    title: "Tøj",
    items: [
      { label: "Top", icon: "top" },
      { label: "Vest", icon: "vest" },
      { label: "Nederdel", icon: "skirt" },
      { label: "Sweater", icon: "sweater" },
      { label: "Cardigan", icon: "cardigan" },
      { label: "Bukser", icon: "pants" },
      { label: "T-shirt", icon: "tshirt" },
      { label: "Kjole", icon: "dress" },
      { label: "Slipover", icon: "vest" },
    ],
    viewAll: "Se alt",
  },
  {
    id: "accessory",
    title: "Accessory",
    items: [
      { label: "Hue", icon: "beanie" },
      { label: "Tasker", icon: "bag" },
      { label: "Sokker", icon: "socks" },
      { label: "Tørklæde", icon: "scarf" },
      { label: "Vanter", icon: "gloves" },
      { label: "Benvarmere", icon: "legwarmers" },
      { label: "Halsedisse", icon: "neckwarmer" },
    ],
    viewAll: "Se alt",
  },
];

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
    <div className={`categories-menu ${isOpen ? "is-open" : ""}`}>
      <div className="categories-menu__panel">
        <div className="categories-menu__grid">
          {categoryGroups.map((group) => (
            <section className="categories-menu__group" key={group.id}>
              <h3 className="categories-menu__title">{group.title}</h3>

              <div className="categories-menu__links">
                {group.items.map((item, index) => (
                  <a
                    href="#"
                    className={`categories-menu__link ${
                      index === group.items.length - 1 ? "is-last-item" : ""
                    }`}
                    key={item.label}
                  >
                    <span className="categories-menu__icon">
                      <CategoryIcon type={item.icon} />
                    </span>
                    <span className="categories-menu__text">{item.label}</span>
                  </a>
                ))}

                <a href="#" className="categories-menu__view-all">
                  {group.viewAll}
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesMegaMenu;
