import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import { Link, useNavigate } from "react-router-dom";
import 'swiper/css/navigation';
import Bmw from '../Pages/Cars/Bmw';


function Slider() {
    return (
        <div>

            <div className='slider'>
                <h1 className='Brands'>Popular Brands</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    <SwiperSlide><Link to="/Audi"><button className='button-1'><img className='slider-1' src={require("../Images/PNG/audi-.png")} alt="" /></button></Link></SwiperSlide>
                    <SwiperSlide><Link to="/Bmw"><button className='button-1'><img className='slider-4' src={require("../Images/PNG/BMW.png")} alt="" /></button> </Link></SwiperSlide>
                    <SwiperSlide><Link to="/lexus"><button className='button-1'><img className='slider-2' src={require("../Images/PNG/ford.png")} alt="" /></button> </Link></SwiperSlide>
                    <SwiperSlide><Link><button className='button-1'><img className='slider-3' src={require("../Images/PNG/honda.png")} alt="" /></button></Link></SwiperSlide>
                    <SwiperSlide><Link to= "/Lexus"><button className='button-1'><img className='slider-4' src={require("../Images/PNG/lexus.png")} alt="" /></button></Link></SwiperSlide>
                    <SwiperSlide><button className='button-1'><img className='slider-4' src={require("../Images/PNG/mazda.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='button-1'><img className='slider-4' src={require("../Images/PNG/mercedes.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='button-1'><img className='slider-4' src={require("../Images/PNG/toyota.png")} alt="" /></button> </SwiperSlide>
                </Swiper>
            </div>

            {/* //RESPONSIVE SWIPWER-MD\\ */}
            <div className='responsive-swiper'>
                <Swiper
                    spaceBetween={-77}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    <SwiperSlide><Link to="/Audi"><button className='responsive-button-1'><img className='responsive-slider-1' src={require("../Images/PNG/audi-.png")} alt="" /></button></Link> </SwiperSlide>
                    <SwiperSlide><Link to="/Bmw"><button className='button-1'><img className='slider-4' src={require("../Images/PNG/BMW.png")} alt="" /></button> </Link></SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-3' src={require("../Images/PNG/ford.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-4' src={require("../Images/PNG/honda.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><Link to=""><button className='responsive-button-1'><img className='responsive-slider-5' src={require("../Images/PNG/lexus.png")} alt="" /></button></Link> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-6' src={require("../Images/PNG/mazda.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-7' src={require("../Images/PNG/mercedes.png")} alt="" /></button> </SwiperSlide>
                </Swiper>
            </div>

            <div className='responsive-swiper-lg'>
                <Swiper
                    spaceBetween={-77}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >

                    <SwiperSlide> <Link to="/Audi"><button className='responsive-button-1'><img className='responsive-slider-1' src={require("../Images/PNG/audi-.png")} alt="" /></button></Link></SwiperSlide>
                    <SwiperSlide> <Link to="/Audi"><button className='responsive-button-1'><img className='responsive-slider-4' src={require("../Images/PNG/honda.png")} alt="" /></button> </Link></SwiperSlide>
                    <SwiperSlide><Link to="/Bmw"><button className='button-1'><img className='slider-4' src={require("../Images/PNG/BMW.png")} alt="" /></button> </Link></SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-3' src={require("../Images/PNG/ford.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-4' src={require("../Images/PNG/honda.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-5' src={require("../Images/PNG/lexus.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-6' src={require("../Images/PNG/mazda.png")} alt="" /></button> </SwiperSlide>
                    <SwiperSlide><button className='responsive-button-1'><img className='responsive-slider-7' src={require("../Images/PNG/mercedes.png")} alt="" /></button> </SwiperSlide>
                </Swiper>
            </div>




        </div>
    )
}

export default Slider