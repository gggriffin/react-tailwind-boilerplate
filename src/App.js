import React from "react";
import { FullWidthContainer } from "./components/FullWidthContainer/FullWidthContainer";
import "./index.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Router } from "./Router/Router";

function App() {
  return (
    <FullWidthContainer>
      <Header />
      <NavBar />
      <Router />
      <Footer />
    </FullWidthContainer>
  );
}

export default App;
