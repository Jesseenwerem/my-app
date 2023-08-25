import video from "../assets/video.mp4";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiEngine } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { MdAirlineSeatReclineExtra, MdSpeed } from "react-icons/md";
import Vehicles from "../Map/Vehicle";

function Main() {
  const [carChosen, setCarChosen] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = (vehicle) => {
    setCarChosen(vehicle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <video src={video} autoPlay loop muted />

      <div className="cars-container">
        <div className="car-wrapper">
          <h1 className="popular-cars">Popular cars</h1>

          {Vehicles.map((vehicle) => (
            <div className="box" data-aos="flip-left">
              <div className="car-1">
                <div className="car-image-container">
                  <img className="img" src={vehicle.image} alt="" />
                </div>
                <button className="details" onClick={() => openModal(vehicle)}>
                  View Details
                </button>
                <div className="brand-container">
                  <p className="brand-name">{vehicle.name}</p>
                  <div className="button-container">
                    <button>Foreign</button>
                    <button>20,528 Mlies</button>
                    <button>4 cylinders</button>
                  </div>
                </div>
                <div className="price-tag-container">
                  <button className="price-tag">
                    <p className="pay">Pay</p>
                  </button>
                  <div className="price-container">
                    <p className="price">{vehicle.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cars-container-md">
        <div className="car-wrapper-md">
          <h1 className="popular-cars-md">Popular cars</h1>
          {Vehicles.map((vehicle) => (
            <div className="box-md">
              <div className="car-1-md">
                <div className="car-image-container-md">
                  <img className="img-md" src={vehicle.image} alt="" />
                </div>
                <button
                  className="detail-md"
                  onClick={() => openModal(vehicle)}
                >
                  View Details
                </button>
                <div className="brand-container-md">
                  <p className="brand-name-md">{vehicle.name}</p>
                  <div className="button-container-md">
                    <button>Foreign</button>
                    <button>20,528 Mlies</button>
                    <button>4 cylinders</button>
                  </div>
                </div>
                <div className="price-tag-container-md">
                  <button className="price-tag-md">
                    <p className="pay-md">Pay</p>
                  </button>
                  <div className="price-container-md">
                    <p className="price-md">$750,000</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="popular-cars-lg">Popular cars</h1>
      <div className="cars-container-lg">
        <div className="car-wrapper-lg">
          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/mesedis-benz.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/ford-ranger.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/lexus.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/toyota-corolla.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/audi.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-lg">
            <div className="car-1-lg">
              <div className="car-image-container-lg">
                <img
                  className="img-lg"
                  src={require("../Images/car11.jpg")}
                  alt=""
                />
              </div>
              <button className="detail-lg" onClick={openModal}>
                View Details
              </button>
              <div className="brand-container-lg">
                <p className="brand-name-lg">2023 Mercedis-benz GLE 350</p>
                <div className="button-container-lg">
                  <button>Foreign</button>
                  <button>20,528 Mlies</button>
                  <button>4 cylinders</button>
                </div>
              </div>
              <div className="price-tag-container-lg">
                <button className="price-tag-lg">
                  <p className="pay-lg">Pay</p>
                </button>
                <div className="price-container-lg">
                  <p className="price-lg">$750,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <section className="car-cover">
           <button className="cancle-button" onClick={closeModal}>
                <FaTimes className="cancle-btn" />
              </button>
        <div className="mescedis-popup" data-aos="zoom-in-up">
          <div className="mesedis-wrapper">
            <div className="info">
              <p className="car-name-1">{carChosen?.name}</p>
             
            </div>
            <div className="box-1">
              <div className="car-image-container-2">
                <img className="image-2" src={carChosen?.image} alt="" />
              </div>
            </div>
            <div className="car-details">
              <li> 5 (7 optional) Passenger capacity.</li>
              <li> 5 (7 optional) Passenger capacity.</li>
              <li> 5 (7 optional) Passenger capacity.</li>
              <li> 5 (7 optional) Passenger capacity.</li>
            </div>
            <div className="images-container">
              <div className="image-container-2">
                <img
                  className="img-1"
                  src={carChosen?.models[0].image}
                  alt=""
                />
                <img
                  className="img-1"
                  src={carChosen?.models[1].image}
                  alt=""
                />
                <img
                  className="img-1"
                  src={carChosen?.models[2].image}
                  alt=""
                />
                <img
                  className="img-1"
                  src={carChosen?.models[4].image}
                  alt=""
                />
              </div>
            </div>
            <div className="specifications">
              <div className="specification-icons">
                <div className="icon-container">
                  {" "}
                  <PiEngine className="icon-one" />
                  <p className="icon-text">2.0 L</p>
                </div>
                <div className="icon-container">
                  <BsFuelPump className="icon-one" />
                  <p className="icon-text">22.5 gal</p>
                </div>
                <div className="icon-container">
                  <MdAirlineSeatReclineExtra className="icon-one" />
                  <p className="icon-text">5 (7 optional) Passenger capacity</p>
                </div>
                <div className="icon-container">
                  <MdSpeed className="icon-one" />
                  <p className="icon-text">9-speed shiftable automatic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

      )}
    </div>
  );
}

export default Main;
