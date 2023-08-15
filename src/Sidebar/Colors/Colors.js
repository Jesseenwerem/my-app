import React from 'react'
import './Colors.css'
import Input from '../../Elements/Input'

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className='sidebar-title.color-title'>Colors</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value="" name='test2' />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color='black'
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      <label className='sidebar-label-container'>

        <input type='radio' onChange={handleChange} value="White" name='test1' />
        <span className='checkmark' style={{ background: "White", border: "2px solid black", color:"black" }} ></span>White
      </label>
    </div>
  )
}

export default Colors