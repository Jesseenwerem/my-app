import React from 'react'
import { useEffect } from 'react'
import { navigate, useNavigate } from 'react-router-dom';


function Loader() {

    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/Login")
        }, 4100);
    },[])


    return (
    <div>
         <img className='loader' src={require("../Images/BUllet.gif")} alt="" /> 
         {/* <img className='' src={require("")} alt="" />  */}

    </div>
  )
}

export default Loader