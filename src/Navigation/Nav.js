import React from 'react'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import './Nav.css'

function Nav() {
  return (
    <div className='Navigation-2'>
      <div className='Nav-container'>
        <input type='text'
          className='search-input'
          id='search-input'
          placeholder='Search...' />
          
      </div>

<div className='Profile-container'>
  <a href="#">
< AiOutlineShoppingCart className = "navigation-icon" />
  </a>

  <a href="#">
  < AiOutlineUserAdd className = "navigation-icon"/>
  </a>

</div>

    </div>
  )
}

export default Nav