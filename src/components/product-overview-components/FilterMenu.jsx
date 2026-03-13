import "./FilterMenu.css";
import { useEffect, useState } from "react";

const FILTER_MIN = 0;
const FILTER_MAX = 1500;
const MIN_GAP = 50;

const DEFAULT_FILTERS = {
  price: {
    min: 0,
    max: 1500,
  },
  category: [],
  color: [],
  strikker: [],
};

const categoryOptions = [
  "Trøjer",
  "Vest",
  "Sweater",
  "Kjoler",
  "Accessories",
  "Cardigan",
  "Strømper",
];

const strikkerOptions = [
  "Emilie Jensen",
  "Maria Hansen",
  "Signe Conradsen",
  "Maja Mogensen",
  "Mogens Nielsen",
  "Camilla Mogensen",
];

const colorOptions = [
  { label: "Hvid", swatch: "#ffffff" },
  { label: "Grøn", swatch: "#5d7c57" },
  { label: "Grå", swatch: "#d9d9d9" },
  { label: "Beige", swatch: "#f5f1e8" },
  { label: "Blå", swatch: "#4a6fa5" },
  { label: "Gul", swatch: "#d4af37" },
  { label: "Lilla", swatch: "#8e63c7" },
  { label: "Sort", swatch: "#000000" },
  { label: "Rød", swatch: "#c62828" },
  { label: "Pink", swatch: "#f2b8c6" },
];

function getMergedFilters(filters) {
  return {
    price: {
      min: filters?.price?.min ?? DEFAULT_FILTERS.price.min,
      max: filters?.price?.max ?? DEFAULT_FILTERS.price.max,
    },
    category: filters?.category ?? [],
    color: filters?.color ?? [],
    strikker: filters?.strikker ?? [],
  };
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M11 5L4 12l7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12h15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 12.5l3.4 3.4 7.6-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterMenu({ isOpen, onClose, initialFilters, onApply }) {
  const [currentView, setCurrentView] = useState("root");
  const [filters, setFilters] = useState(getMergedFilters(initialFilters));

  useEffect(() => {
    if (isOpen) {
      setFilters(getMergedFilters(initialFilters));
      setCurrentView("root");
    }
  }, [isOpen, initialFilters]);

  const isRootView = currentView === "root";

  const minPercent =
    ((filters.price.min - FILTER_MIN) / (FILTER_MAX - FILTER_MIN)) * 100;
  const maxPercent =
    ((filters.price.max - FILTER_MIN) / (FILTER_MAX - FILTER_MIN)) * 100;

  const handleClose = () => {
    setCurrentView("root");
    onClose();
  };

  const handleBack = () => {
    setCurrentView("root");
  };

  const openSection = (sectionKey) => {
    setCurrentView(sectionKey);
  };

  const toggleMultiSelect = (sectionKey, value) => {
    setFilters((prev) => {
      const currentValues = prev[sectionKey];
      const exists = currentValues.includes(value);

      return {
        ...prev,
        [sectionKey]: exists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const handleMinChange = (event) => {
    const value = Number(event.target.value);

    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        min: Math.min(value, prev.price.max - MIN_GAP),
      },
    }));
  };

  const handleMaxChange = (event) => {
    const value = Number(event.target.value);

    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        max: Math.max(value, prev.price.min + MIN_GAP),
      },
    }));
  };

  const handleApply = () => {
    onApply(filters);
    handleClose();
  };

  const resetCurrentView = () => {
    if (currentView === "root") {
      setFilters(DEFAULT_FILTERS);
      return;
    }

    if (currentView === "price") {
      setFilters((prev) => ({
        ...prev,
        price: {
          min: DEFAULT_FILTERS.price.min,
          max: DEFAULT_FILTERS.price.max,
        },
      }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      [currentView]: [],
    }));
  };

  const renderRootMenu = () => {
    return (
      <div className="filter-menu__section-list">
        <button
          className="filter-menu__section-button"
          type="button"
          onClick={() => openSection("price")}
        >
          <span>Pris</span>
          <ChevronRightIcon />
        </button>

        <button
          className="filter-menu__section-button"
          type="button"
          onClick={() => openSection("category")}
        >
          <span>Kategori</span>
          <ChevronRightIcon />
        </button>

        <button
          className="filter-menu__section-button"
          type="button"
          onClick={() => openSection("color")}
        >
          <span>Farve</span>
          <ChevronRightIcon />
        </button>

        <button
          className="filter-menu__section-button"
          type="button"
          onClick={() => openSection("strikker")}
        >
          <span>Strikker</span>
          <ChevronRightIcon />
        </button>
      </div>
    );
  };

  const renderPriceView = () => {
    return (
      <div className="filter-menu__detail">
        <div className="filter-menu__price-values">
          <div className="filter-menu__price-pill">{filters.price.min} kr</div>
          <div className="filter-menu__price-separator">—</div>
          <div className="filter-menu__price-pill">{filters.price.max} kr</div>
        </div>

        <div className="filter-menu__range-wrap">
          <div className="filter-menu__range-track" />
          <div
            className="filter-menu__range-fill"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />

          <input
            className="filter-menu__range filter-menu__range--min"
            type="range"
            min={FILTER_MIN}
            max={FILTER_MAX}
            step="50"
            value={filters.price.min}
            onChange={handleMinChange}
          />

          <input
            className="filter-menu__range filter-menu__range--max"
            type="range"
            min={FILTER_MIN}
            max={FILTER_MAX}
            step="50"
            value={filters.price.max}
            onChange={handleMaxChange}
          />
        </div>

        <div className="filter-menu__range-labels">
          <span>{FILTER_MIN} kr</span>
          <span>{FILTER_MAX} kr</span>
        </div>
      </div>
    );
  };

  const renderStandardOptions = (sectionKey, options) => {
    return (
      <div className="filter-menu__option-list">
        {options.map((option) => {
          const isSelected = filters[sectionKey].includes(option);

          return (
            <button
              key={option}
              className="filter-menu__option-button"
              type="button"
              onClick={() => toggleMultiSelect(sectionKey, option)}
            >
              <span
                className={`filter-menu__check-circle ${
                  isSelected ? "is-selected" : ""
                }`}
              >
                {isSelected && <CheckIcon />}
              </span>

              <span className="filter-menu__option-label">{option}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const renderColorOptions = () => {
    return (
      <div className="filter-menu__color-list">
        {colorOptions.map((option) => {
          const isSelected = filters.color.includes(option.label);

          return (
            <button
              key={option.label}
              className="filter-menu__color-row"
              type="button"
              onClick={() => toggleMultiSelect("color", option.label)}
            >
              <div className="filter-menu__color-left">
                <span
                  className={`filter-menu__check-square ${
                    isSelected ? "is-selected" : ""
                  }`}
                >
                  {isSelected && <CheckIcon />}
                </span>

                <span className="filter-menu__color-name">{option.label}</span>
              </div>

              <div className="filter-menu__color-right">
                <span
                  className="filter-menu__swatch"
                  style={{ backgroundColor: option.swatch }}
                />
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderDetailView = () => {
    if (currentView === "price") {
      return renderPriceView();
    }

    if (currentView === "category") {
      return renderStandardOptions("category", categoryOptions);
    }

    if (currentView === "strikker") {
      return renderStandardOptions("strikker", strikkerOptions);
    }

    if (currentView === "color") {
      return renderColorOptions();
    }

    return null;
  };

  let currentTitle = "Filter";

  if (currentView === "price") {
    currentTitle = "PRIS";
  }

  if (currentView === "category") {
    currentTitle = "KATEGORI";
  }

  if (currentView === "color") {
    currentTitle = "FARVE";
  }

  if (currentView === "strikker") {
    currentTitle = "STRIKKER";
  }

  return (
    <div
      className={`filter-menu-overlay ${isOpen ? "is-open" : ""}`}
      onClick={handleClose}
      aria-hidden={!isOpen}
    >
      <aside
        id="filter-menu"
        className={`filter-menu ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="filter-menu__header">
          {isRootView ? (
            <>
              <button
                className="filter-menu__icon-button"
                type="button"
                onClick={handleClose}
                aria-label="Luk filtermenu"
              >
                <CloseIcon />
              </button>

              <h2 className="filter-menu__title">{currentTitle}</h2>

              <span className="filter-menu__header-spacer" />
            </>
          ) : (
            <>
              <button
                className="filter-menu__icon-button"
                type="button"
                onClick={handleBack}
                aria-label="Gå tilbage"
              >
                <BackIcon />
              </button>

              <h2 className="filter-menu__title filter-menu__title--detail">
                {currentTitle}
              </h2>

              <button
                className="filter-menu__icon-button"
                type="button"
                onClick={handleClose}
                aria-label="Luk filtermenu"
              >
                <CloseIcon />
              </button>
            </>
          )}
        </div>

        <div className="filter-menu__body">
          {isRootView ? renderRootMenu() : renderDetailView()}
        </div>

        <div className="filter-menu__footer">
          <button
            className="filter-menu__footer-button filter-menu__footer-button--ghost"
            type="button"
            onClick={resetCurrentView}
          >
            Ryd
          </button>

          <button
            className="filter-menu__footer-button filter-menu__footer-button--solid"
            type="button"
            onClick={handleApply}
          >
            Anvend filter
          </button>
        </div>
      </aside>
    </div>
  );
}

export default FilterMenu;
