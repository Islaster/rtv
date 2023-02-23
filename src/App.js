import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import TransHousing from "./pages/TransHousing/TransHousing";
import Reentry from "./pages/Reentry/Reentry";
import IMGGallery from "./pages/ImgGallery/ImgGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/transitionalHousing" element={<TransHousing />} />
        <Route path="/reentry" element={<Reentry />} />
        <Route path="/gallery" element={<IMGGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
