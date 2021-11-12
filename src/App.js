import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

// Layouts
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Books from "./pages/Books";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound"; // not found 404 page

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
