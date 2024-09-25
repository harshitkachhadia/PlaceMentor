import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Experiences from "./Pages/Experiences/Experiences";
import Footer from "./Components/Footer/Footer";
import Resources from "./Pages/Resources/Resources";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/experiance" element={<Experiences/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
};

export default App;
