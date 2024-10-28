import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/home";
import { Profil } from "./pages/profil";
import { Projetspublications } from "./pages/projetspublications";
import { Centredinterets } from "./pages/centredinterets";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/projetspublications" element={<Projetspublications />} />
        <Route path="/centredinterets" element={<Centredinterets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
