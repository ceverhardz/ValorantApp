import { Route, Routes } from 'react-router';
import './App.css';
import Navigatebar from './component/Navbar/Navigatebar';
import About from './pages/About';
import Agents from './pages/Agents';
import Home from './pages/Home';

function App() {
  return (
    <div>
        <Navigatebar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/agents/:id" element={<Agents />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
