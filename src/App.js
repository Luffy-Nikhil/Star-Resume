import "./App.css";
import Header from "./components/IntroPage.js";
import Build from "./components/Build.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Contact from './components/Contact.js';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = { <Header /> }/>
          <Route exact path = "/build" element = { <Build /> }/>
          <Route exact path = "/about" element = { <About /> }/>
          <Route exact path = "/contact" element = { <Contact /> }/>
        </Routes> 
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
