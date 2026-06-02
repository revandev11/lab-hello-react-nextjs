export default function ProductCard({
  name,
  price,
  image,
  description,
  inStock,
}) {
  return (
    <div className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className="product-description">{description}</p>
      <span className={`badge ${inStock ? "badge-in-stock" : "badge-out-of-stock"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}