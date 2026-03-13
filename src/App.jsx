import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductOverview from "./pages/ProductOverview";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkt-oversigt" element={<ProductOverview />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
