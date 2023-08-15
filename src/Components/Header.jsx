import React, { useState } from 'react'
import { AiOutlineBars, AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);



  const [showModal, setShowModal] = useState(false);

  const [showContainerModal, setContainerModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }


  const openContainerModal = () => {
    setContainerModal(true);
  }
  const closeContainerModal = () => {
    setContainerModal(false);
  }




  return (
    <div>

      <div className='navigation'>
        <div className='nav-bar'></div>
        <nav>
          <img className='Logo1' src={require("../Images/logo1.png")} alt="" />
          <a href="Home">Home</a>
          <a href="Buy">Buy Car</a>
          {/* <a href="">Brand New</a> */}
          <a href="">All Cars</a>
          <a href="">Car Financing</a>
          <a href="">Sell Car</a>
          {/* <a href=""></a> */}
          <button className='acount-info' onClick={openContainerModal} ><AiOutlineUser /></button>
        </nav>
      </div>
      {/* <div className='Navbar'></div> */}
      <div className='Border'></div>

      {showContainerModal && (
        <div className='account-container' >
          <a href="/Login"><div className="log-out-btn-container">
            <button className="logout-btn">Log Out</button>
          </div></a>
          <FaTimes className='logout-cancle' onClick={closeContainerModal} />

        </div>
      )}

      <div className='navigation-lg'>
        <nav className='navigation-1'>
          <div className='navigation-2'></div>
          <AiOutlineBars className='bar-lg' onClick={openModal} />

        </nav>
      </div>


      <div className='navigation-md'>
        <nav className='navigation-3'>
          <div className='navigation-4'></div>
          <AiOutlineBars className='bar' onClick={openModal} />
        </nav>
      </div>


      {/* Navigation-MD */}
      {showModal && (
        <div className='responsive-navigation' >
          <nav>
            <div className='wrapper' data-aos="slide-left">
              <div className='logout-container'>
                <button className='responsive-acount-info'><AiOutlineUser /></button>
                <button className='responsive-logout-btn'>Log Out</button>
              </div>
              <a href="Home">Home</a>
              <a href="Buy">Buy Car</a>
              <a href="">Brand New</a>
              <a href="">All Cars</a>
              <a href="">Car Financing</a>
              <a href="">Sell Car</a>
              <button className='chat-on' data-aos="slide-left">WhatsApp</button>
              <FaTimes className='cancle' onClick={closeModal} />
              {/* <a href="" className='whatsapp-number-2'>-234-09-039-466-319</a> */}
            </div>
          </nav>

        </div>
      )}

      {/* Navigation-LG */}
      {showModal && (
        <div className='responsive-navigation-lg' >
          <nav>
            <div className='wrapper-lg' data-aos="slide-left">
              <div className='logout-container-lg'></div>
              <a href="Home">Home</a>
              <a href="Buy">Buy Car</a>
              <a href="">Brand New</a>
              <a href="">All Cars</a>
              <a href="">Car Financing</a>
              <a href="">Sell Car</a>
              <a href="https://wa.link/6ehnmt" className='whatsapp-number-2-lg'><button className='chat-on-lg'>WhatsApp</button>
              </a>
            </div>
          </nav>
          <FaTimes className='cancle-lg' onClick={closeModal} />

        </div>
      )}



    </div>
  )
}

export default Header