import {
    HashRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/footer/footer'
import FAQ from './pages/FAQ/FAQ';
import LandingPage from "./pages/landingPage/LandingPage";

function App() {

  return (
    <>
        <Header/>
      <div style={{margin: '5% auto'}}>

          <Router basename="/">
              <Routes>
                  <Route path="/"  element={<LandingPage/>}/>
                  <Route path="/faq" element={  <FAQ/>}/>
              </Routes>
          </Router>

      </div>
        <Footer/>
    </>
  )
}

export default App;
