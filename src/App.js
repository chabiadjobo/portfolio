import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { Projetspublications } from "./pages/Projetspublications";
import { Centredinterets } from "./pages/Centredinterets";

function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/projetspublications" element={<Projetspublications />} />
        <Route path="/centredinterets" element={<Centredinterets />} />
        {/* Route par défaut pour gérer les chemins inconnus */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
