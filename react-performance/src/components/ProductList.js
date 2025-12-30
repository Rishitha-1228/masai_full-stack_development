function ProductList({ products, onSelectProduct }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      {products.slice(0, 5).map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onSelectProduct(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
