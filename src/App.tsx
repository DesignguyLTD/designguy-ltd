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

function App() {

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
