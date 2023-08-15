import React, { useState } from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { AiOutlineBars } from "react-icons/ai";
import './Sidebar.css'
import { AiOutlineCar } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sidebar({ handleChange }) {


    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);



    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }



    return <>


        <section className='sidebar'>
            <div className='logo-container'>
                <a href="/Home"><h2 className='home'><BiHomeAlt /></h2></a>
                <h1><AiOutlineCar /></h1>
            </div>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
        </section>





        {/* <AiOutlineBars className='buy-car-bar' onClick={openModal} /> */}
        <h1 className='car-icon'><AiOutlineCar onClick={openModal} /></h1>
        {showModal && (
            <section className='sidebar-md' data-aos="slide-right">
                <div className='logo-container'>
                    <a href="/Home"><h2 className='home'><BiHomeAlt /></h2></a>
                    <h1 className='section-cancle' onClick={closeModal}><FaTimes /></h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        )}
    </>
}

export default Sidebar