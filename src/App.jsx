import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Header } from "./components/Global/Header";
import { FormRegistro } from "./components/Login/FormRegistro";
import { FormRecuperar } from "./components/Login/FormRecuperar";
import { ParallaxProvider } from "react-scroll-parallax"
import { Footer } from './components/Global/Footer';
export default function App() {
  return (
    <Router>
      <ParallaxProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FormRegistro />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FormRecuperar />} />
      </Routes>
      <Footer/>
      </ParallaxProvider>
    </Router>
  )
}