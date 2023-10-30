import {useState} from 'react'
import "../Car-slider/Slider1.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Vehicles from "../Map/Vehicle";



function Slider1() {
  const [carChosen, setCarChosen] = useState(null);



  const openModal = (vehicle) => {
    setCarChosen(vehicle);
  };
  return (
    <div>
         <Carousel className="main-slider"
         autoPlay
         infiniteLoop
         >
                  <div className="main-slider-img">
                  <img src={carChosen?.models[0].image} alt="" />
                  </div>
                  <div className="main-slider-img">
                  <img src={carChosen?.models[1].image} alt="" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>
                  <div className="main-slider-img">
                    <img src="https://pictures-nigeria.jijistatic.com/123380328_NzY4LTEwMjQtNTc0ODRhOTkwMA.webp" />
                  </div>

                </Carousel>
    </div>
  )
}

export default Slider1