import React, { useState } from 'react'
import video from '../assets/video.mp4'
import { FaTimes } from "react-icons/fa";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiEngine } from "react-icons/pi";
import {BsFuelPump} from "react-icons/bs"
import {MdAirlineSeatReclineExtra , MdSpeed} from "react-icons/md"





function Main() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <div>
      <video src={video} autoPlay loop muted />

      <div className='cars-container'>


        <div className="car-wrapper">
          <h1 className='popular-cars'>Popular cars</h1>

          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
              <button className='details' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>


          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/ford-ranger.jpg")} alt="" />
              </div>
              <button className='details' id='button-1' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2022 Ford Ranger AE</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>



          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/toyota-corolla.jpg")} alt="" />
              </div>
              <button className='details' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2015 Toyota-Corolla ME</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>



          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/audi.jpg")} alt="" />
              </div>
              <button className='details' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2023 Audi 310</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>


          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/lexus.jpg")} alt="" />
              </div>
              <button className='details' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2010 lexus GEL</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>


          <div className="box" data-aos="flip-left">
            <div className="car-1">
              <div className="car-image-container">
                <img className='img' src={require("../Images/Bmw.jpg")} alt="" />
              </div>
              <button className='details' onClick={openModal}>View Details</button>
              <div className='brand-container'>
                <p className='brand-name'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container'>
                <button className='price-tag'>
                  <p className='pay'>Pay</p>
                </button>
                <div className='price-container'>
                  <p className='price'>$750,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cars-container-md'>


        <div className="car-wrapper-md">
          <h1 className='popular-cars-md'>Popular cars</h1>

          <div className="box-md">
            <div className="car-1-md">
              <div className="car-image-container-md">
                <img className='img-md' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
              <button className='detail-md' onClick={openModal}>View Details</button>
              <div className='brand-container-md'>
                <p className='brand-name-md'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container-md'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container-md'>
                <button className='price-tag-md'>
                  <p className='pay-md'>Pay</p>
                </button>
                <div className='price-container-md'>
                  <p className='price-md'>$750,000</p>
                </div>
              </div>
            </div>
          </div>


          <div className="box-md">
            <div className="car-1-md">
              <div className="car-image-container-md">
                <img className='img-md' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
              <button className='detail-md' onClick={openModal}>View Details</button>
              <div className='brand-container-md'>
                <p className='brand-name-md'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container-md'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container-md'>
                <button className='price-tag-md'>
                  <p className='pay-md'>Pay</p>
                </button>
                <div className='price-container-md'>
                  <p className='price-md'>$750,000</p>
                </div>
              </div>
            </div>
          </div>



          <div className="box-md">
            <div className="car-1-md">
              <div className="car-image-container-md">
                <img className='img-md' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
              <button className='detail-md' onClick={openModal}>View Details</button>
              <div className='brand-container-md'>
                <p className='brand-name-md'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container-md'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container-md'>
                <button className='price-tag-md'>
                  <p className='pay-md'>Pay</p>
                </button>
                <div className='price-container-md'>
                  <p className='price-md'>$750,000</p>
                </div>
              </div>
            </div>
          </div>



          <div className="box-md">
            <div className="car-1-md">
              <div className="car-image-container-md">
                <img className='img-md' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
              <button className='detail-md' onClick={openModal}>View Details</button>
              <div className='brand-container-md'>
                <p className='brand-name-md'>2023 Mercedis-benz GLE 350</p>
                <div className='button-container-md'>
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className='price-tag-container-md'>
                <button className='price-tag-md'>
                  <p className='pay-md'>Pay</p>
                </button>
                <div className='price-container-md'>
                  <p className='price-md'>$750,000</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {showModal && (
        <div className='mescedis-popup' data-aos="zoom-in-up">
          <div className="mesedis-wrapper">
            <div className="info">
              <button className='cancle-button' onClick={closeModal}><FaTimes className='cancle-btn' /></button>
            </div>
            <div className="box-1">
              <div className="car-image-container-2">
                <img className='image-2' src={require("../Images/mesedis-benz.jpg")} alt="" />
              </div>
            </div>
            <div className="car-details">
              {/* <p><li>5 (7 optional) Passenger capacity.</li></p>
              <p><li></li></p>
              <p><li></li></p>
              <p><li></li></p>
              <p><li></li></p>
              <p><li></li></p>
              <p><li></li></p> */}
            </div>
            <div className="images-container">
              <div className="image-container-2">
                <img className='img-1' src={require("../Specifications/Mesedis/mecedis benz back.jpg")} alt="" />
                <img className='img-1' src={require("../Specifications/Mesedis/mecedis benz boot.jpg")} alt="" />
                <img className='img-1' src={require("../Specifications/Mesedis/mecedis benz tire.jpg")} alt="" />
                <img className='img-1' src={require("../Specifications/Mesedis/mesedis benz inside.jpg")} alt="" />
              </div>
            </div>
            <div className="specifications">
              <div className="specification-icons">
                <PiEngine />
                <BsFuelPump />
                <MdAirlineSeatReclineExtra />
                <MdSpeed />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Main