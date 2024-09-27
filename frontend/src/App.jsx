import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Resources from "./pages/Resources/Resources";
import PlacementInsights from "./pages/PlacementInsights/PlacementInsights";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/placementInsights" element={<PlacementInsights/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
};

export default App;
