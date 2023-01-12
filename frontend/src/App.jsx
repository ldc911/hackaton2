/* eslint-disable import/no-unresolved */
import "./setup.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import ContactUs from "./pages/ContactUs";
import CarDetails from "./pages/CarDetails";
import DataContext from "./contexts/DataContext";

function App() {
  let token = "";
  const cookies = new Cookies();
  token = cookies.cookies?.token;

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Router>
        <Header />
        <DataContext.Provider value={token}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/cardetails/:id" element={<CarDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/car/:id" element={<CarDetails />} />
          </Routes>
        </DataContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
