import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { ProductPage } from "./pages/ProductPage";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Cart } from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <BrowserRouter>
        <Header
          cart={cart}
          isCartActive={isCartActive}
          setIsCartActive={setIsCartActive}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          isCartActive={isCartActive}
          setIsCartActive={setIsCartActive}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/shoe/:shoe"
            element={<ProductPage cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
