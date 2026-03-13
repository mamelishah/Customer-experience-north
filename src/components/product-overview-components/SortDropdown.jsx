import "./SortDropdown.css";
import { useEffect, useRef } from "react";

const sortList = [
  "Mest populære",
  "Nyeste først",
  "Pris: lav til høj",
  "Pris: høj til lav",
  "A-Å",
];

function DownArrowSvg() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SortDropdown({ isOpen, selectedSort, onToggle, onSelect, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    function closeWhenClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", closeWhenClickOutside);

    return () => {
      document.removeEventListener("mousedown", closeWhenClickOutside);
    };
  }, [onClose]);

  return (
    <div className="sort-box" ref={boxRef}>
      <button
        className={`sort-button ${isOpen ? "open-button" : ""}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span>Sortér</span>
        <DownArrowSvg />
      </button>

      {isOpen && (
        <div className="sort-menu" role="menu">
          {sortList.map((oneOption) => (
            <button
              key={oneOption}
              className={`sort-item ${
                selectedSort === oneOption ? "active-item" : ""
              }`}
              type="button"
              onClick={() => onSelect(oneOption)}
              role="menuitem"
            >
              {oneOption}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
