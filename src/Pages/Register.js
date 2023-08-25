import React, { useState } from "react";
import { useEffect } from "react";
import {
  AiOutlineEyeInvisible,
  AiOutlineUserAdd,
  AiOutlineEye,
} from "react-icons/ai";
import { app, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/Login");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message)
      });
  };

  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  return (
    <>


      <div className="register-container">
        <img className="Logo" src={require("../Images/logo1.png")} alt="" />
        <h2 className="welcome">WELCOME TO BMW</h2>
        <p className="login">Create an account</p>
        {/* <p className='login-2'>login using social networks</p> */}

        <form className="register-input-field" onSubmit={signUp}>
          <input type="text" placeholder="Enter Full Name" id="Name" />

          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={state ? "text" : "password"}
            placeholder="Enter Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type={state ? "text" : "password"}
            placeholder="Confirm Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-eye" onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>

          <button
            className="register-signin"
            type="submit"
            name="submit"
            value="sign in"
          >
            Sign In
            <AiOutlineUserAdd className="Sign-in-icon" />
          </button>
        </form>
      </div>
      <p className="Login-link">
        {" "}
        Already have an Account ?<a href="/Login">Login</a>
      </p>

      <img
        className="register-background"
        src={require("../Images/register.jpg")}
        alt=""
      />
      <div className="blur">
        {" "}
        <h3 className="h3" data-aos="fade-in">
          Welcome
        </h3>
      </div>


      <section className="responsive-register-container">
        <img
          className="responsive-Logo"
          src={require("../Images/logo1.png")}
          alt=""
        />
        <h2 className="responsive-welcome">WELCOME TO BMW</h2>
        <p className="create-text">Create an Account</p>
        <form className="register-input-feild"onSubmit={signUp} >
          <input type="text" placeholder="First Name" id="Fname" />
          <input type="text" placeholder="Last Name" id="Lname" />
          <input type="email" placeholder="Email" id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={state ? "text" : "password"}
            placeholder="Enter Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type={state ? "text" : "password"}
          />
          <button className="register-eye" onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
          <button className="register-btn-md"
            type="submit"
            name="submit"
            value="sign in"
          >Register</button>
        </form>
      </section>
    </>
  );
}

export default Register;
