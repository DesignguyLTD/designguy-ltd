import {
    HashRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/footer/footer'
import FAQ from './pages/FAQ/FAQ';
import LandingPage from "./pages/landingPage/LandingPage";
import Pricing from "./pages/Pricing/Pricing";
import About from "./pages/About/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"; // You can also use <link> for styles



function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false,    // Whether animation should happen only once
        });
    }, []);

    useEffect(() => {
        // After data is fetched or state changes
        AOS.refresh();
    }, []);
  return (
    <>
        <Header/>
      <div style={{margin: '5% auto'}}>

          <Router basename="/">
              <Routes>
                  <Route path="/"  element={<LandingPage/>}/>
                  <Route path="/faq" element={  <FAQ/>}/>
                  <Route path="/about-us" element={  <About/>}/>
                  <Route path='/pricing' element={<Pricing/>}/>
              </Routes>
          </Router>

      </div>
        <Footer/>
    </>
  )
}

export default App;
