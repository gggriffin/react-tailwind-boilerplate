import React from "react";
import { FullWidthContainer } from "./components/FullWidthContainer/FullWidthContainer";
import "./index.css";
import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";
// import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
//TODO: Uncomment NavBar and adjust height of footer


function App() {
  return (
      <FullWidthContainer>
        <Header />
        <Content />
        {/* <NavBar /> */}
        <Footer />
      </FullWidthContainer>
  );
}

export default App;
