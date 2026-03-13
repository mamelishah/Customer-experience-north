import "./FilterBar.css";
import { useEffect, useState } from "react";
import FilterMenu from "./FilterMenu";
import SortDropdown from "./SortDropdown";

function FilterSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 12h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 17h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RightArrowSvg() {
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

function FilterBar({ activeFilters, onApplyFilters, resultCount }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [chosenSort, setChosenSort] = useState("Mest populære");

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setShowFilterMenu(false);
        setShowSortMenu(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showFilterMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showFilterMenu]);

  return (
    <>
      <section className="filter-box">
        <button
          className="filter-button"
          type="button"
          onClick={() => {
            setShowFilterMenu(true);
            setShowSortMenu(false);
          }}
        >
          <FilterSvg />
          <span>Filter</span>
        </button>

        <div className="category-box">
          <button className="category-button active-button" type="button">
            ALL KNITWEAR
          </button>

          <button className="category-button" type="button">
            CARDIGANS
          </button>

          <button className="category-button" type="button">
            MERINO WOOL
          </button>

          <button className="category-button" type="button">
            CASHMERE JUMPERS
          </button>

          <button className="category-button" type="button">
            JUMPERS
          </button>

          <button className="category-button" type="button">
            HIGH NECK JUMPERS
          </button>

          <button className="category-button" type="button">
            CASHMERE CARDIGANS
          </button>

          <button
            className="next-button"
            type="button"
            aria-label="Næste kategori"
          >
            <RightArrowSvg />
          </button>
        </div>

        <SortDropdown
          isOpen={showSortMenu}
          selectedSort={chosenSort}
          onToggle={() => {
            setShowSortMenu((oldValue) => !oldValue);
            setShowFilterMenu(false);
          }}
          onSelect={(oneOption) => {
            setChosenSort(oneOption);
            setShowSortMenu(false);
          }}
          onClose={() => setShowSortMenu(false)}
        />
      </section>

      <FilterMenu
        isOpen={showFilterMenu}
        onClose={() => setShowFilterMenu(false)}
        initialFilters={activeFilters}
        onApply={onApplyFilters}
        resultCount={resultCount}
      />
    </>
  );
}

export default FilterBar;
