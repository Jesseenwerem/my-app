import React from 'react'
import Header from '../../Components/Header'
import video from '../../assets/video2.mp4'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Bmw() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <div>
            < Header />
            <div className='bmw-vid-container'>
                <video className='BMW-video' src={video} autoPlay loop muted />
                <h2 className='BMW-text'  data-aos="flip-left"  >BMW Brands</h2>
            </div>

            <div className='bmw-vid-container-lg'>
                <video className='BMW-video' src={video} autoPlay loop muted />
                <h2 className='BMW-text' data-aos="fade-in"  >BMW Brands</h2>
            </div> 

            <div className='Bmx-container'>
            {/* <input className='bmx-input'></input> */}

                <div className='bmx-wrapper'>

                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car1.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'   data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car2.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>

                    <div className='bmx-1'   data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car3.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car5.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car6.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>



                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car7.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>

                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car8.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car9.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car10.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>

                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car11.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car1.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>


                    <div className='bmx-1'  data-aos="flip-left">
                        <div className='image-container'>
                            <img className='Bmw-img' src={require("../../Images/Cars/car4.jpg")} alt="" />
                        </div>
                        <div class="Bmw-discription-container">
                            <h3 class="Bmw-dicription">2023 BMW M2 </h3>
                        </div>
                        <div className='Bmw-btn-container'>
                            <button className='Bmw-btn'>View Details</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='responsive-Bmw-container-md'>

                <div className='responsive-bmx-wrapper-md'>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car1.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car2.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car3.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car4.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car5.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-md' data-aos="flip-left">
                        <div className='responsive-image-container-md'>
                            <img className='responsive-Bmw-img-md' src={require("../../Images/Cars/car6.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-md">
                            <h3 class="responsive-Bmw-dicription-md">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-md'>
                            <button className='responsive-Bmw-btn-md'>View Details</button>
                        </div>
                    </div>
                    <button className='responsive-option-md'>View More</button>
                </div>
            </div>

            <div className='responsive-Bmw-container-lg'>

                <div className='responsive-bmx-wrapper-lg'>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car1.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car2.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car3.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>

                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car4.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car5.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>



                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car6.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car7.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car8.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car9.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>


                    <div className='responsive-bmx-1-lg'>
                        <div className='responsive-image-container-lg'>
                            <img className='responsive-Bmw-img-lg' src={require("../../Images/Cars/car10.jpg")} alt="" />
                        </div>
                        <div class="responsive-Bmw-discription-container-lg">
                            <h3 class="responsive-Bmw-dicription-lg">2023 BMW M2 </h3>
                        </div>
                        <div className='responsive-Bmw-btn-container-lg'>
                            <button className='responsive-Bmw-btn-lg'>View Details</button>
                        </div>
                    </div>

                </div>
            </div>




        </div>


    )
}

export default Bmw