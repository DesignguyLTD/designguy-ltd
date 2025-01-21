// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/footer/footer'
import FAQ from './pages/FAQ/FAQ';

function App() {

  return (
    <>
        <Header/>
      <div>
          <FAQ/>
      </div>
        <Footer/>
    </>
  )
}

export default App;
