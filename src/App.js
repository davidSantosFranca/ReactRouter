import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './component/Home';
import About from './component/About'; 
import Contact from './component/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li className="li">
            <Link to="/">Home</Link>
          </li>
          <li className="li">
            <Link to="/about">About</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
