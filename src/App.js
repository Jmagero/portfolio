import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
