import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/our-team" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
