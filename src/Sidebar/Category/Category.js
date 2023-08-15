import React from 'react'
import './Category.css'
import Input from '../../Elements/Input'

function Category({ handleChange }) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test' />
          <span className='checkmark'></span>All
        </label>


        <Input
          handleChange={handleChange}
          value="car"
          title="Car"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="bus"
          title="Bus"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="bike"
          title="Bike"
          name="test"
        />

      </div>
    </div>
  );
}

export default Category