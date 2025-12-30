import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

const productsData = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000),
}));

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // useMemo optimization
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // useCallback optimization
  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h1>Total Price: ₹{totalPrice}</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleProductSelect}
      />
    </div>
  );
}

export default App;
