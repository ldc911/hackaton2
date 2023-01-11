/* eslint-disable import/no-unresolved */
import "./setup.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Rent from "./pages/Rent";

import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
