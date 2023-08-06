import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import ScrollToTop from './hooks/ScrollToTop';
import HomePage from "./pages/home";
import FooterSection from "./components/FooterSection";
import MobileApp from "./pages/MobileApp";
import WebDesign from "./pages/WebDesign";
import GraphicDesign from "./pages/GraphicDesign";
import MainPage from "./pages/main";



function App() {

  
  return (
    <div className="md:text-base text-gray-600 text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<HomePage />} />
        <Route path='/mobile-app' element={<MobileApp />} />
        <Route path='/web-design' element={<WebDesign />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
