import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about";
import Layout from "./pages/layout";
import Services from "./pages/services";
import Attorneys from "./pages/attorney";
import ContactUs from "./pages/contact-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
