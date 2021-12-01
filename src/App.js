import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Projects from './components/Projects'
import About from './components/About'
import Articles from './components/Articles'
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
