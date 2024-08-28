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
import { Cursos } from "./pages/Cursos";
import { ConfirmEmail } from "./components/Login/ConfirmEmail";
import { Error404 } from "./components/Global/Error404";
import { Subscription } from "./pages/Subscription";
import ProtectedRoute from "./components/Global/ProtectedRoute";
import { SuccessPayment } from "./pages/SuccessPayment";

export default function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/:code?" element={<FormRegistro />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/about" element={<About />} />
          <Route path="/recuperar" element={<FormRecuperar />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/success/:session_id?" element={<SuccessPayment />} />
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