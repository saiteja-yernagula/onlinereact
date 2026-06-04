
import { useState } from "react"
function Addnewdoctor() {
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [age,setAge]=useState('')
  const [salary,setSalary]=useState('')
  const [specialization,setSpecialization]=useState('')
  return (
    <div >
      <h1>Add New Doctor</h1>
      <form action="" className='form-container'>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Doctor Name' className='text-field'/>
        <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder='Enter Age' className='text-field'/>
        
        <select value={gender} onChane={(e)=>setGender(e.target.value)} name="" id="">
          <option >Select Gender</option>
          <option value='Male'> Male</option>
          <option value='Female'> Female</option>
        </select>

        <input value={specialization} onChange={(e)=>setSpecialization(e.target.value)} type="text" placeholder='Enter Specialization' className='text-field'/>
        <input value={salary} type="text" onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary' className='text-field'/>
        <button > Add Doctor</button>
      </form>
    </div>
  )
}

export default Addnewdoctor