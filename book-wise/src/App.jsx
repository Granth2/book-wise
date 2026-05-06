import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Recommend from './pages/Recommend';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app-root">
        <div className="navbar">
          <div className="navbar-left">
            <h1>BookWise</h1>
            <div className="nav-links">
              <Link to="/"><button>Home</button></Link>
              <Link to="/recommend"><button>Recommend</button></Link>
              <Link to="/about"><button>About</button></Link>
            </div>
          </div>
          <div className="navbar-right" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;