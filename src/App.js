import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/navbar/NavBar.js'
import Footer from './components/footer/Footer.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Contacts from './pages/Comtacts.js';
import ProjectPage from './pages/ProjectPage.js';
import ScrollToTop from './utils/ScrollToTop.js';

function App() {
  return (
    <div className="App">
  <Router>
    <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/project/:id" element={<ProjectPage />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
     <Footer />
  </Router>
 
    </div>
  );
}

export default App;
