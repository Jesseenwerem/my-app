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
import All from './Pages/All'
import Sell from './Pages/Sell'
import Slider1 from '../src/Car-slider/Slider1'
import { Toaster } from 'react-hot-toast';
import { Pagination } from './Components/Pagination';
import Ford from './Pages/Cars/Ford'
import Checkout from "./Pages/Checkout"
import New from "./Pages/New"



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
          <Route path="/Ford" element={<Ford />} />
          <Route path="/All" element={<All />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Slider1" element={<Slider1 />} />
          <Route path="/New" element={<New />} />
          <Route path="/Pagination" element={<Pagination />} />
          <Route path="/Checkout" element={<Checkout />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
