import { useState } from "react";
import ProductGrid from "../components/product-overview-components/ProductGrid";
import products from "../assets/data/products.json";
import FilterBar from "../components/product-overview-components/FilterBar1";
import TitleSection from "../components/product-overview-components/TitleSection";

const startFilters = {
  price: {
    min: 0,
    max: 1500,
  },
  category: [],
  color: [],
  strikker: [],
};

const colorsObject = {
  hvid: ["#ffffff", "#f4f4f4"],
  grøn: ["#5d7c57"],
  grå: ["#d9d9d9", "#444444"],
  beige: ["#f5f1e8", "#d9c29c", "#d8c27a"],
  blå: ["#4a6fa5", "#70b7ff"],
  gul: ["#d4af37", "#ffd65a"],
  lilla: ["#8e63c7"],
  sort: ["#000000"],
  rød: ["#c62828"],
  pink: ["#f2b8c6", "#e86a92"],
};

function getPrice(price) {
  const priceText = String(price).replace(",", ".");
  const foundNumber = priceText.match(/\d+(\.\d+)?/);

  if (foundNumber) {
    return Number(foundNumber[0]);
  }

  return 0;
}

function sameText(text1, text2) {
  return (
    String(text1).trim().toLowerCase() === String(text2).trim().toLowerCase()
  );
}

function matchesCategory(product, filters) {
  if (filters.category.length === 0) {
    return true;
  }

  for (let i = 0; i < filters.category.length; i++) {
    const categoryFromFilter = filters.category[i];

    if (sameText(categoryFromFilter, product.category)) {
      return true;
    }
  }

  return false;
}

function matchesStrikker(product, filters) {
  if (filters.strikker.length === 0) {
    return true;
  }

  for (let i = 0; i < filters.strikker.length; i++) {
    const strikkerFromFilter = filters.strikker[i];

    if (sameText(strikkerFromFilter, product.strikker)) {
      return true;
    }
  }

  return false;
}

function matchesColor(product, filters) {
  if (filters.color.length === 0) {
    return true;
  }

  for (let i = 0; i < filters.color.length; i++) {
    const colorFromFilter = filters.color[i].toLowerCase();
    const allowedColorCodes = colorsObject[colorFromFilter] || [];

    for (let j = 0; j < product.colors.length; j++) {
      const colorFromProduct = product.colors[j].toLowerCase();

      if (allowedColorCodes.includes(colorFromProduct)) {
        return true;
      }
    }
  }

  return false;
}

function ProductOverview() {
  const [filters, setFilters] = useState(startFilters);

  const shownProducts = products.filter((product) => {
    const priceNumber = getPrice(product.price);

    const priceMatches =
      priceNumber >= filters.price.min && priceNumber <= filters.price.max;

    const categoryMatches = matchesCategory(product, filters);
    const strikkerMatches = matchesStrikker(product, filters);
    const colorMatches = matchesColor(product, filters);

    return priceMatches && categoryMatches && strikkerMatches && colorMatches;
  });

  return (
    <>
      <TitleSection />
      <FilterBar activeFilters={filters} onApplyFilters={setFilters} />
      <ProductGrid products={shownProducts} />
    </>
  );
}

export default ProductOverview;
