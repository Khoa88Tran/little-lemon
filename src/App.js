import React from "react";
import Nav from "./Nav";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Reservations from "./Reservations";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer/>
    </>
  </BrowserRouter>
);
}

export default App;