import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import React, { useEffect } from 'react';
import initAOS from './utils/AOS';
import "./App.css"
import './styles/bootstrap.min.css';
import Home from "./components/Home"
import About from "./components/About"
import Booking from "./components/Booking"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Menu from "./components/Menu"
import Service from "./components/Service"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"
import Header from "./components/Header"
import Footer from "./components/Footer"





const App: React.FC = () => {
  useEffect(() => {
    initAOS(); // Инициализация AOS при монтировании компонента
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/booking"
            element={<Booking />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/error"
            element={<Error />}
          />
          <Route
            path="/menu"
            element={<Menu />}
          />
          <Route
            path="/service"
            element={<Service />}
          />
          <Route
            path="/team"
            element={<Team />}
          />
          <Route
            path="/testimonial"
            element={<Testimonial />}
          />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
