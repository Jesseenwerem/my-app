import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiOutlineEyeInvisible, AiOutlineUserAdd, AiOutlineEye } from "react-icons/ai";


function Register() {


    const [state, setstate] = useState(false);

    const toggleBtn = () => {

        setstate(prevState => !prevState);

    }

    return (
        <>

            <div className='register-container'>
                <img className='Logo' src={require("../Images/logo1.png")} alt='' />
                <h2 className='welcome'>WELCOME TO BMW</h2>
                <p className='login'>Create an account</p>
                {/* <p className='login-2'>login using social networks</p> */}
                <div className='register-input-field'>
                    <input type='text' placeholder='Enter Full Name' id='Name' />
                    <input type='text' placeholder='Email' id='email' />

                    <input type={state ? "text" :
                        "password"
                    } placeholder='Enter Passowrd' />

                        <input type={state ? "text" :
                        "password"
                    } placeholder='Confirm Passowrd' 
                    
                    />
                    <button className='register-eye' onClick={toggleBtn} >
                        {state ? <AiOutlineEyeInvisible /> :
                            <AiOutlineEye />
                        }
                    </button>

                   
                    <button className='register-signin'>Sign up
                        <AiOutlineUserAdd className='Sign-in-icon' />
                    </button>

                </div>
            </div>
            <p className='Login-link'> Already have an Account ?<a href="/Login" >Login</a></p>

            <img className='register-background' src={require("../Images/register.jpg")} alt="" />
            <div className='blur'> <h3 className='h3' data-aos="fade-in">Welcome</h3></div>



        </>
    )
}

export default Register