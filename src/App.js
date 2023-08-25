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
import Audi from './Pages/Cars/Audi'
import Lexus from './Pages/Cars/Lexus'
import Mercedes from './Pages/Cars/Mercedes'
import Register from './Pages/Register'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
<Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Bmw" element={<Bmw />} />
          <Route path="/Audi" element={<Audi />} />
          <Route path="/Lexus" element={<Lexus />} />
          <Route path="/Mercedes" element={<Mercedes />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
