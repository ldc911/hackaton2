/* eslint-disable import/no-unresolved */
import "./setup.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { logout } from "./slices/auth";
import EventBus from "./common/EventBus";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import CarDetail from "./pages/CarDetail";
import ProfilPage from "./pages/ProfilPage";
import OwnerCar from "./pages/OwnerCar";
import ContactUs from "./pages/ContactUs";

function App() {
  const [isOwner, setIsOwner] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setIsOwner(!currentUser.user.firstName);
      setIsAdmin(currentUser.user.isAdmin === 1);
    } else {
      setIsOwner(false);
      setIsAdmin(false);
    }
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Router>
        <Header currentUser={currentUser} isOwner={isOwner} isAdmin={isAdmin} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<Rent />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/fleet" element={<OwnerCar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
