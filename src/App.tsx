import { useState } from "react";
import "./App.css";

import "./Fontawesome-all.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OtpProcess from "./pages/OtpProcess";
import Applicationform from "./pages/Applicationform";
import Products from "./pages/Products";
import About from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otpprocess" element={<OtpProcess />} />
          <Route path="/application" element={<Applicationform />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
