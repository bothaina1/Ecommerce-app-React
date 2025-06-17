import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LanguageContext from "./context/language";
import { useState, Suspense, lazy } from "react";


// Lazy load pages
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./pages/Register"));


function App() {
  const [language, setLanguage] = useState("ltr");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Header />
        <div dir={language} className="container my-5">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
               <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;