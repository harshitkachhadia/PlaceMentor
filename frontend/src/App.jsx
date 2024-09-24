import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Experiences from "./Pages/Experiences/Experiences";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experiance" element={<Experiences/>}/>
      </Routes>
    </Container>
  );
};

export default App;
