import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Resources from "./pages/Resources/Resources";
import PlacementInsights from "./pages/PlacementInsights/PlacementInsights";
import Opportunities from "./pages/Opportunities/Opportunities";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  console.log(showLogin);
  
  return (
    <Container>
      {showLogin?<LoginSignUp setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />}/>
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
