import video from "../assets/vdeo6.mp4";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Vehicles from "../Map/Vehicle";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
// import Footer from "./Footer";
// import { PiEngine } from "react-icons/pi";
// import { BsFuelPump } from "react-icons/bs";
// import { MdAirlineSeatReclineExtra, MdSpeed } from "react-icons/md";
// import { Swiper, SwiperSlide } from "swiper/react";

function Main() {
  const [carChosen, setCarChosen] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [carToPay, setCarToPay] = useState(null);

  const StoreItem = (vehicle) => {
    setCarToPay(vehicle);
    localStorage.setItem("carInfo", JSON.stringify(carToPay))
  };

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
    <>
      <video src={video} autoPlay loop muted />

      <div className="cars-container">
        <div className="car-wrapper">
          <h1 className="popular-cars">Popular cars</h1>

          {Vehicles.map((vehicle) => (
            <div className="box" data-aos="fade-in">
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
                <Link className="pay" to="/Checkout">

                  <button
                    className="price-tag"
                    onClick={() => StoreItem(vehicle)}
                  >
                    
                      <p>Pay</p>
                  </button>
                  </Link>
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
          {/* <button className="back-top">*</button> */}
        </div>
      </div>

      <h1 className="popular-cars-lg">Popular cars</h1>
      <div className="cars-container-lg">
        <div className="car-wrapper-lg">
          {Vehicles.map((vehicle) => (
            <div className="box-lg">
              <div className="car-1-lg">
                <div className="car-image-container-lg">
                  <img className="img-lg" src={vehicle.image} alt="" />
                </div>
                <button className="detail-lg" onClick={openModal}>
                  View Details
                </button>
                <div className="brand-container-lg">
                  <p className="brand-name-lg">{vehicle.name}</p>
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
                    <p className="price-lg">{vehicle.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>

      {showModal && (
        <section className="car-cover">
          <button className="cancle-button" onClick={closeModal}>
            <FaTimes className="cancle-btn" />
          </button>

          <div className="Cars-popup" data-aos="zoom-in-up">
            <div className="mesedis-wrapper">
              <div className="info">
                <div className="car_name">
                  <p className="car-name-1">{carChosen?.name}</p>
                </div>
              </div>

              <Carousel className="main-slider">
                <div className="main-slider-img">
                  <img src={carChosen?.models[0].image} alt="" />
                </div>
                <div className="main-slider-img">
                  <img src={carChosen?.models[1].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[2].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[3].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[4].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[5].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[7].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[8].image} alt="" />
                </div>

                <div className="main-slider-img">
                  <img src={carChosen?.models[11].image} alt="" />
                </div>
              </Carousel>

              <div className="car-details">
                {/* <li> 5 (7 optional) Passenger capacity.</li> */}
                <h1>{Vehicles.info}</h1>
              </div>

              {/* <div className="images-container">
                <div className="image-container-2">
                  <img
                    className="img-1"
                    // src={carChosen?.models[0].image}
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
              </div> */}
              <div className="specifications">
                {/* <div className="specification-icons">
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
                    <p className="icon-text">
                      5 (7 optional) Passenger capacity
                    </p>
                  </div>
                  <div className="icon-container">
                    <MdSpeed className="icon-one" />
                    <p className="icon-text">9-speed shiftable automatic</p>
                  </div>
                </div> */}
              </div>

              {/* <div className="Car_slider_container">
                <Swiper
                  className="car-sliders"
                  spaceBetween={50}
                  slidesPerView={4}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-1"
                        src={carChosen?.models[0].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-2"
                        src={carChosen?.models[1].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-3"
                        src={carChosen?.models[2].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-4"
                        src={carChosen?.models[3].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-5"
                        src={carChosen?.models[4].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-6"
                        src={carChosen?.models[5].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-7"
                        src={carChosen?.models[7].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-7"
                        src={carChosen?.models[8].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-7"
                        src={carChosen?.models[10].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-7"
                        src={carChosen?.models[11].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="car-sliders">
                    <div className="images_container-1">
                      <img
                        className="images_img-7"
                        src={carChosen?.models[12].image}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div> */}
            </div>
          </div>
        </section>
      )}

      {showModal && (
        <section className="car-cover_responsive">
          <div className="responsive-info" data-aos="zoom-in-up">
            {carChosen?.name}
          </div>
          <div className="responsive-car-popup" data-aos="zoom-in-up">
            <button className="responsive-cancle-button" onClick={closeModal}>
              <FaTimes className="cancle-btn" />
            </button>
            <div className="responsive-info-container"></div>
            <Carousel className="responsive-main-slider">
              <div>
                <img src={carChosen?.models[0].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[1].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[2].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[3].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[4].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[5].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[10].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[7].image} alt="" />
              </div>

              <div>
                <img src={carChosen?.models[8].image} alt="" />
              </div>
            </Carousel>
            <div className="responsive-car-details">
              <h1>Car Details</h1>
              <div className="responsive-texts">
                <li>Lexus</li>
                <li>Lexus</li>
                <li>Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
                <li> Lexus</li>
              </div>
            </div>
            <div className="responsive-car-spec"></div>
          </div>
        </section>
      )}

      <div className="car_links-container">
        <h2 className="more_brand">More Brands</h2>
        <div className="car_links_wrapper">
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
          <div className="links">logo</div>
        </div>
      </div>

      <div className="responsive_car_links_container">
        <h2 className="responsive_more_brand">More Brands</h2>
        <div className="responsive_car_links">
          <div className="responsive-links">1</div>
          <div className="responsive-links">2</div>
          <div className="responsive-links">3</div>
          <div className="responsive-links">4</div>
          <div className="responsive-links">5</div>
          <div className="responsive-links">6</div>
          <div className="responsive-links">7</div>
          <div className="responsive-links">8</div>
          <div className="responsive-links">9</div>
          <div className="responsive-links">10</div>
          <div className="responsive-links">11</div>
          <div className="responsive-links">12</div>
        </div>
      </div>

      {/* // Footer // */}
      <div className="footer">
        <div className="footer_copywrite">
          <div className="footer_text">Bullet copyright &copy; 2023</div>
          <span>All Right Reserved</span>
        </div>
        <div className="footer-icon_container">
          <p>Follow on:</p>
          <div className="footer-icons">
            <BsFacebook />
            <BsWhatsapp />
            <BsInstagram />
          </div>
        </div>
        <div className="input_container-1">
          <input
            className="input_container-1-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="email-1">Send</button>
        </div>

        <div className="footer-links">
          <h2 className="link-text">Links</h2>
          <a href="Home">Home</a>
          <a href="Buy">Buy Car</a>
          <a href="All">All Cars</a>
          <a href="">Car Financing</a>
          <a href="Sell">Sell Car</a>
          <a href="">About Us</a>
        </div>
      </div>

      <div className="responsive-footer-md">
        <div className="responsive-copywrite-cont">
          <div className="responsive-copywrite">
            Bullet copyright &copy; 2023
          </div>
          <div className="responsive-copywrite-2">All Right Reserved</div>
        </div>
        <div className="resp-follow-container">
          {/* <h2 className="resp-follow-txt">Follow on:</h2> */}
          <div className="resp-follow-icon">
            <BsFacebook className="responsive-icon-2" />
            <BsWhatsapp className="responsive-icon-2" />
            <BsInstagram className="responsive-icon-2" />
          </div>
        </div>
        <div className="responsive-footer-links">
          <h2 className="link-text">Links</h2>
          <a className="responsive-a" href="Home">
            Home
          </a>
          <a className="responsive-a" href="Buy">
            Buy Car
          </a>
          <a className="responsive-a" href="All">
            All Cars
          </a>
          <a className="responsive-a" href="Sell">
            Sell Car
          </a>
          <a className="responsive-a" href="">
            About Us
          </a>
          <a href="">Car Financing</a>
        </div>
      </div>
    </>
  );
}

export default Main;
