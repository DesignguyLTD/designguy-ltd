// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import FAQ from './pages/FAQ/FAQ';

function App() {

  return (
    <>
      <div>
          <FAQ/>
          <Footer/>

        {/*<a href="https://designguyltd.github.io/designguy-ltd/" target="_blank">*/}
        {/*  <img src={viteLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
      </div>
    </>
  )
}

export default App;
