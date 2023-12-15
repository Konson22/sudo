import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Appbar';
import ScrollToTop from './hooks/ScrollToTop';
// import HomePage from "./pages/main";
import FooterSection from "./components/FooterSection";
import MobileApp from "./pages/MobileApp";
import WebDesign from "./pages/WebDesign";
import GraphicDesign from "./pages/GraphicDesign";
import MainPage from "./pages/main";




function App() {

  
  return (
      <div className="md:text-base text-gray-600 text-sm bg-lightgray">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mobile-app-developement' element={<MobileApp />} />
          <Route path='/web-design' element={<WebDesign />} />
          <Route path='/graphic-design' element={<GraphicDesign />} />
        </Routes>
        <FooterSection />
      </div>
  );
}

export default App;
