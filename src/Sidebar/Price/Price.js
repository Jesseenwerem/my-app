import React from 'react'
import './Price.css'
import Input from '../../Elements/Input'

function Price({handleChange}) {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test2' />
          <span className='checkmark'></span>All
        </label>


<Input 
handleChange={handleChange}
value={100}
title= "$100 - 150"
name= "test2"
/>

<Input 
handleChange={handleChange}
value={100}
title= "$150 - 200"
name= "test2"
/>


<Input 
handleChange={handleChange}
value={100}
title= "Over $200"
name= "test2"
/>

    </div>
  )
}

export default Price