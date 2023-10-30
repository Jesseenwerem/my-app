import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineUserAdd } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { app, auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Carousel } from 'react-responsive-carousel';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  return (
    <div>
      {/* SYSTEM VIEW */}
      <section className="login-container">
        <img className="Logo" src={require("../Images/logo1.png")} alt="" />
        <h2 className="welcome">WELCOME TO BMW</h2>
        <p className="login">Login to your account</p>
        <p className="login-2">login using social networks</p>

        <div className="icon">
          <FcGoogle className="google" />
          <BsFacebook className="facebook" />
          <FaTwitter className="tweeter" />
        </div>

        <div className="line-1"></div>
        <div className="line-2"></div>
        <p className="or">or</p>

        <form className="input-field" onSubmit={signIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={state ? "text" : "password"}
            placeholder="Enter Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="eye" onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
          <button
            className="signin"
            type="submit"
            name="submit"
            value="sign in"
          >
           Login
            {/* <AiOutlineUserAdd className="Sign-in-icon" /> */}
          </button>
        </form>
        <p className="register-link">
          {" "}
          Don't have an Account ?<a href="/Register">Register Now</a>
        </p>
      </section>
      <img
        className="background"
        src={require("../Images/image(12).jpg")}
        alt=""
      />

      {/* <img className='' src={require("")} alt="" /> */}
      <div className="blur">
        {" "}
        <h3 className="h3" data-aos="fade-in">
          Welcome
        </h3>
      </div>

      {/* MIDIUM SCREEN */}
      <div className="responsive-login">
        <div className="responsive-welcome-container">
          <h2 className="responsive-welcome">Login</h2>
        </div>
        <div className="responsive-welcome-container-2">
          <p>Welcome to back BMW</p>
        </div>
        <form className="resp-input-field" onSubmit={signIn}>
          {/* <input className='responsive-input' type='text' placeholder='Enter Full Name' id='Name' /> */}
          <label className="label-1">
            <p>Email Adress</p>
          </label>
          <input
            className="responsive-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label-1">
            <p>Password</p>
          </label>
          <input
            className="responsive-input"
            type={state ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button className="responsive-eye" onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button> */}
          <button
            className="responsive-signin"
            type="submit"
            name="submit"
            value="sign in"
          >
            Login
            {/* <AiOutlineUserAdd className="Sign-in-icon" /> */}
          </button>

          <div className="responsive-icon">
            <FcGoogle className="google" />
            <p>Contiuue with Google</p>
          </div>

            <a href="/Register" className="login_link">Create an account</a>

          <p className="responsive-or">or sign with</p>
          <div className="left-line"></div>
          <div className="right-line"></div>
        </form>
      </div>

      {/* LARGE SCREEN */}
      <div className="responsive-login-lg">
        <img
          className="responsive-Logo-lg"
          src={require("../Images/logo1.png")}
          alt=""
        />
        <h2 className="responsive-welcome-lg">WELCOME TO BMW</h2>
        <form className="resp-input-field">
          {/* <input className='responsive-input-lg' type='text' placeholder='Enter Full Name' id='Name' /> */}
          <input
            className="responsive-input-lg"
            type="text"
            placeholder="Email"
          />
          <input
            className="responsive-input-lg"
            type={state ? "text" : "password"}
            placeholder="Enter Passowrd"
          />
          <button className="responsive-eye-lg" onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
          <button className="responsive-signin-lg">Signin</button>
          <p className="responsive-or-lg">or</p>
          <h3 className="sign-with-lg">Sign with</h3>
          <div className="responsive-icon-lg">
            <FcGoogle className="google-lg" />
            <BsFacebook className="facebook-lg" />
            <FaTwitter className="tweeter-lg" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
