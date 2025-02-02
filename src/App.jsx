import "./App.css";
import { Route, Routes } from "react-router-dom";

//import components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

//import pages
import Home from "pages/Home";
import Projects from "pages/Projects";
import About from "pages/About";
import Contact from "pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
