import "./ProductGrid.css";
import ProductCard from "../productCard";

function ProductGrid({ products }) {
  return (
    <section className="product-grid-section">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            colors={product.colors || []}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
