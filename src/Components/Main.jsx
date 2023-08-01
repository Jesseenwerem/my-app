import React, { useState } from 'react'
import video from '../assets/video.mp4'
import { FaTimes } from "react-icons/fa";





function Main() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div>
      <video src={video} autoPlay loop muted />

      <div className='cars-container'>


        <div className="car-wrapper">
          <h1 className='popular-cars'>Popular cars</h1>

          <div className="box">
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


          <div className="box">
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



          <div className="box">
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



          <div className="box">
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


          <div className="box">
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


          <div className="box">
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
        <div className='mescedis-popup'>
          <div className="mesedis-wrapper">
            <div className="info">
              <button className='cancle-button' onClick={closeModal}><FaTimes className='cancle-btn' /></button>
            </div>
            <div className="box-1">
              <div className="car-image-container-2">
                <img className='image-2' src={require("../Images/car11.jpg")} alt="" />
              </div>
            </div>
            <div className="car-details"></div>
            <div className="images-container"></div>
            <div className="specifications"></div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Main