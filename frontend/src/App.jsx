import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Resources from "./pages/Resources/Resources";
import PlacementInsights from "./pages/PlacementInsights/PlacementInsights";
import Opportunities from "./pages/Opportunities/Opportunities";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/placementInsights" element={<PlacementInsights/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/opportunities" element={<Opportunities/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
};

export default App;
