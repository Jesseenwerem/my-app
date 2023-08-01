import './App.css';
import './Responsive.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Slider from './Components/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './Pages/Loader.js'
import Login from './Pages/Login.js';
import Home from './Pages/Home.js'
import Bmw from './Pages/Cars/Bmw';
import Buy from './Pages/Buy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Bmw" element={<Bmw />} />
          <Route path="/Buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
