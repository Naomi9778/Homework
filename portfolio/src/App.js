
import "./App.css";
import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";




function App() {
  return( <div>
    <Navbar/>
    <Main />
    <About/>
    <Skills/>
    <Experience />
  </div>

  )
}

export default App;
