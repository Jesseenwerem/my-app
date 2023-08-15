import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineUserAdd } from "react-icons/ai";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { navigate, useNavigate } from 'react-router-dom';
// import { auth, provider } from '../Firebase';
// import { signInWithPopup } from 'firebase/auth';

function Login() {


    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    const [state, setstate] = useState(false);

    const toggleBtn = () => {

        setstate(prevState => !prevState);

    }

    return (
        <div>
            {/* SYSTEM VIEW */}
            <div className='login-container'>
                <img className='Logo' src={require("../Images/logo1.png")} alt='' />
                <h2 className='welcome'>WELCOME TO BMW</h2>
                <p className='login'>Login to your account</p>
                <p className='login-2'>login using social networks</p>

                <div className='icon'>
                    <FcGoogle className='google' />
                    < BsFacebook className='facebook' />
                    < FaTwitter className="tweeter" />
                </div>

                <div className='line-1'></div>
                <div className='line-2'></div>
                <p className='or'>or</p>

                <div className='input-field'>
                    <input type='text' placeholder='Email' id='email' />
                    <input type={state ? "text" :
                        "password"
                    } placeholder='Enter Passowrd' />
                    <button className='eye' onClick={toggleBtn} >
                        {state ? <AiOutlineEyeInvisible /> :
                            <AiOutlineEye />
                        }
                    </button>
                    <button className='signin'>Sign In
                        <AiOutlineUserAdd className='Sign-in-icon' />
                    </button>
                </div>
                <p className='register-link'> Don't have an Account ?<a href="/Register" >Register Now</a></p>
            </div>
            <img className='background' src={require("../Images/image(12).jpg")} alt="" />
            {/* <img className='' src={require("")} alt="" /> */}
            <div className='blur'> <h3 className='h3' data-aos="fade-in">Welcome</h3></div>

            {/* MIDIUM SCREEN */}
            <div className='responsive-login'>
                <img className='responsive-Logo' src={require("../Images/logo1.png")} alt='' />
                <h2 className='responsive-welcome'>WELCOME TO BMW</h2>
                <div className='resp-input-field'>
                    {/* <input className='responsive-input' type='text' placeholder='Enter Full Name' id='Name' /> */}
                    <input className='responsive-input' type='text' placeholder='Email' id='email' />
                    <input className='responsive-input' type={state ? "text" :
                        "password"
                    } placeholder='Enter Passowrd' />
                    <button className='responsive-eye' onClick={toggleBtn} >
                        {state ? <AiOutlineEyeInvisible /> :
                            <AiOutlineEye />
                        }
                    </button>
                    <button className='responsive-signin'>Signin
                        <AiOutlineUserAdd className='Sign-in-icon' />

                    </button>
                    <p className='responsive-or'>or</p>
                    <h3 className='sign-with'>Sign with</h3>
                    <div className='responsive-icon'>
                        <FcGoogle className='google' />
                        < BsFacebook className='facebook' />
                        < FaTwitter className="tweeter" />
                    </div>

                </div>


            </div>

            {/* LARGE SCREEN */}
            <div className='responsive-login-lg'>
                <img className='responsive-Logo-lg' src={require("../Images/logo1.png")} alt='' />
                <h2 className='responsive-welcome-lg'>WELCOME TO BMW</h2>
                <div className='resp-input-field'>
                    {/* <input className='responsive-input-lg' type='text' placeholder='Enter Full Name' id='Name' /> */}
                    <input className='responsive-input-lg' type='text' placeholder='Email' id='email' />
                    <input className='responsive-input-lg' type={state ? "text" :
                        "password"
                    } placeholder='Enter Passowrd' />
                    <button className='responsive-eye-lg' onClick={toggleBtn} >
                        {state ? <AiOutlineEyeInvisible /> :
                            <AiOutlineEye />
                        }
                    </button>
                    <button className='responsive-signin-lg'>Signin</button>
                    <p className='responsive-or-lg'>or</p>
                    <h3 className='sign-with-lg'>Sign with</h3>
                    <div className='responsive-icon-lg'>
                        <FcGoogle className='google-lg' />
                        < BsFacebook className='facebook-lg' />
                        < FaTwitter className="tweeter-lg" />
                    </div>

                </div>




            </div>


        </div>
    )
}

export default Login