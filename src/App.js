import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { Projetspublications } from "./pages/Projetspublications";
import { Centredinterets } from "./pages/Centredinterets";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/profil" element={<Profil />} />
        <Route path="/portfolio/projetspublications" element={<Projetspublications />} />
        <Route path="/portfolio/centredinterets" element={<Centredinterets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
