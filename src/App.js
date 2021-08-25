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
    <FullWidthContainer>
      {/* <Router>
        <Header />
        <Content />
        <NavBar />
      </Router>
      <Footer /> */}
      <div style={{ background: "white" }}>TEST TEST TEST</div>
    </FullWidthContainer>
  );
}

export default App;
