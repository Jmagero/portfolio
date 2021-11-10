import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Projects from './components/Projects'
import About from './components/About'
import Articles from './components/Articles'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
          {/* <Route path='/about'>
            <About />
          </Route> */}
          {/* <Route exact path='/'>
            <Projects />
          </Route>
          <Route path='/articles'>
            <Articles />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
