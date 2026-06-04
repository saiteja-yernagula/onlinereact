import React from 'react'

function Addnewdoctor() {
  return (
    <div >
      <h1>Add New Doctor</h1>
      <form action="" className='form-container'>
        <input type="text" placeholder='Enter Doctor Name' className='text-field'/>
        <input type="text" placeholder='Enter Age' className='text-field'/>
        
        <select name="" id="">
          <option >Select Gender</option>
          <option value='Male'> Male</option>
          <option value='Female'> Female</option>
        </select>
        
        <input type="text" placeholder='Enter Specialization' className='text-field'/>
        <input type="text" placeholder='Enter Salary' className='text-field'/>
        <button > Add Doctor</button>
      </form>

    </div>
  )
}

export default Addnewdoctor