import React, { useState, useEffect } from "react";
import { AiOutlineBars, AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";

function Header() {

  const navigate = useNavigate()
  const LogOut = () => {
    localStorage.clear();
    signOut(auth)
    navigate('/register')
  };

  const [user] = useAuthState(auth);
  console.log(user);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [showContainerModal, setContainerModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const openContainerModal = () => {
    setContainerModal(true);
  };
  const closeContainerModal = () => {
    setContainerModal(false);
  };

  return (
    <div>
      <div className="navigation">
        <div className="nav-bar"></div>
        <nav>
          <img className="Logo1" src={require("../Images/logo1.png")} alt="" />
          <a href="Home">Home</a>
          <a href="Buy">Buy Car</a>
          <a href="All">All Cars</a>
          <a href="">Car Financing</a>
          <a href="Sell">Sell Car</a>
          <a href="">About Us</a>
          <a href="tel:08039842061">
            <FiPhoneCall  className="call-icon"/>
            -234-083-984-2061</a>
          <button className="acount-info" onClick={openContainerModal}>
            <AiOutlineUser />
          </button>
        </nav>
      </div>
      {/* <div className='Navbar'></div> */}
      <div className="Border"></div>

      {showContainerModal && (
        <section className="section-accnt">
          <div className="account-container" data-aos="fade-in">
            <div className="email_container">{user?.email}</div>

            <div className="log-out-btn-container">
              <button className="logout-btn" onClick={LogOut}>Log Out</button>
            </div>
            <FaTimes className="logout-cancle" onClick={closeContainerModal} />
            <div className="name-container">
            </div>
          </div>
        </section>
      )}

      <div className="navigation-lg">
        <nav className="navigation-1">
          <div className="navigation-2"></div>
          <AiOutlineBars className="bar-lg" onClick={openModal} />
        </nav>
      </div>

      <div className="navigation-md">
        <nav className="navigation-3">
          <div className="navigation-4"></div>
          <AiOutlineBars className="bar" onClick={openModal} />
        </nav>
      </div>

      {/* Navigation-MD */}
      {showModal && (
        <div className="responsive-navigation">
          <nav>
            <div className="wrapper" data-aos="slide-left">
              <div className="logout-container">
                <button className="responsive-acount-info" data-aos="fade-in">
                  <div className="user_name-md">{user?.email}</div>

                  <AiOutlineUser />
                </button>
                <button className="responsive-logout-btn"onClick={LogOut}>Log Out</button>
              </div>
              <a className="tags" href="Home">
                Home
              </a>
              <a className="tags" href="Buy">
                Buy Car
              </a>
              <a className="tags" href="">
                Brand New
              </a>
              <a className="tags" href="All">
                All Cars
              </a>
              <a className="tags" href="">
                Car Financing
              </a>
              <a className="tags" href="Sell">
                Sell Car
              </a>

              <a className="chat-on-1" href="https://wa.link/6ehnmt">
                <button className="chat-on">WhatsApp</button>
              </a>
              <FaTimes className="cancle" onClick={closeModal} />
              {/* <a href="" className='whatsapp-number-2'>-234-09-039-466-319</a> */}
            </div>
          </nav>
        </div>
      )}

      {/* Navigation-LG */}
      {showModal && (
        <div className="responsive-navigation-lg">
          <nav>
            <div className="wrapper-lg" data-aos="slide-left">
              <div className="logout-container-lg"></div>
              <a href="Home">Home</a>
              <a href="Buy">Buy Car</a>
              <a href="">Brand New</a>
              <a href="All">All Cars</a>
              <a href="">Car Financing</a>
              <a href="">Sell Car</a>
              <a href="https://wa.link/6ehnmt" className="whatsapp-number-2-lg">
                <button className="chat-on-lg">WhatsApp</button>
              </a>
            </div>
          </nav>
          <FaTimes className="cancle-lg" onClick={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Header;
