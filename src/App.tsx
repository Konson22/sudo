import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import ScrollToTop from './hooks/ScrollToTop';
import HomePage from "./pages/home";
import FooterSection from "./components/FooterSection";
import MobileApp from "./pages/MobileApp";
import WebDesign from "./pages/WebDesign";
import GraphicDesign from "./pages/GraphicDesign";


function App() {

  
  return (
    <div className="md:text-base text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mobile-app' element={<MobileApp />} />
        <Route path='/web-design' element={<WebDesign />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
