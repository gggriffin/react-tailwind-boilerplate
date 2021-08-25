import React from "react";
import { FullWidthContainer } from "./components/FullWidthContainer/FullWidthContainer";
import "./index.css";
import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      Test test test
      <Router basename="https://github.com/gggriffin/deadwoods">
        <FullWidthContainer>
          <Header />
          <Content />
          <NavBar />
          <Footer />
        </FullWidthContainer>
      </Router>
    </>
  );
}

export default App;
