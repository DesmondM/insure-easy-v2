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
import Healthcare from "./pages/Healthcare";
import { FuneralInsurance } from "./pages/FuneralInsurance";
import Accisure from "./pages/Accisure";
import ValuePlusPlan from "./pages/ValuePlusPlan";
import ValuePlusSeniors from "./pages/ValuePlusSeniors";
import OtpProcessVpp from "./pages/OtpProcessVpp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/otpprocess" element={<OtpProcess />} />
          <Route path="/otpvppprocess" element={<OtpProcessVpp />} />
          <Route path="/application" element={<Applicationform />} />
          <Route path="/vppapplication" element={<ValuePlusPlan />} />
          <Route path="/vpsapplication" element={<ValuePlusSeniors />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/funeralinsurance" element={<FuneralInsurance />} />
          <Route path="/accisure" element={<Accisure />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
