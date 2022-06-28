import { Header } from "./components/Header";
import { ProductPage } from "./pages/ProductPage";
import { Products } from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/shoe/:shoe" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
