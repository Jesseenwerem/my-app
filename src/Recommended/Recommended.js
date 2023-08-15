import React from 'react'
import './Recommended.css';
import Button from '../Elements/Button';

function Recommended({handleClick}) {
  return <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
       
      <Button onClickHandler={handleClick} value= "" title="All"  />
       <Button onClickHandler={handleClick} value= "Bmw" title="Bmw"  />
       <Button onClickHandler={handleClick} value= "Lexus" title="Lexus"  />
       <Button onClickHandler={handleClick} value= "Mercedes-Benz" title="Mercedes-Benz"  />
       <Button onClickHandler={handleClick} value= "toyota" title="toyota"  />
       <Button onClickHandler={handleClick} value= "Ford" title="Ford"  />
      </div>
    </div>
  </>
}

export default Recommended
