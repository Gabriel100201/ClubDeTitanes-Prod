import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Header } from "./components/Global/Header";
import { FormRegistro } from "./components/Login/FormRegistro";
import { FormRecuperar } from "./components/Login/FormRecuperar";
import { ParallaxProvider } from "react-scroll-parallax"
import { Footer } from './components/Global/Footer';
import { Profile } from "./components/Profile/Profile";
import { Cursos } from "./components/Home/Cursos";
import { ConfirmEmail } from "./components/Login/ConfirmEmail";
import { Error404 } from "./components/Global/Error404";
import ProtectedRoute from "./components/Global/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<FormRegistro />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/about" element={<About />} />
          <Route path="/recuperar" element={<FormRecuperar />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/cursos" element={<Cursos />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </ParallaxProvider>
    </Router>
  )
}