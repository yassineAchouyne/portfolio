import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Work from "./Component/Work/Work";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";



function App() {
  return (
    <div>
      <NavBar />
      <main className="l-main">
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
