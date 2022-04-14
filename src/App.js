import React from "react";
// Components
// import { init } from "./utils/init";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Pages
import IndexPage from "./Pages/IndexPage";
import TechPage from "./Pages/TechPage";
import TeamPage from "./Pages/TeamPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
// Import Router
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  // React.useEffect(() => {
  //   init();
  // }, []);

  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <AppContainer className="App">
        <Nav />
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/tech" element={<TechPage />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <EnquiryForm />
        <Footer />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 5rem;
`;

export default App;
