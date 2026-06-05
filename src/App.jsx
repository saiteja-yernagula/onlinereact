// import { useState } from "react"
import Doctorcard from "./components/Doctorcard"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
import Addnewdoctor from "./components/Addnewdoctor"
// import { useEffect } from "react"

function App(){
  // let [count,setCount]=useState(0)

  //   console.log('comp is')
  //   console.log('running')

  // function inccount(){
  //   setCount(count+1)
  //   console.log(count)
  // }

  // useEffect(()=>{
  //   console.log('useeffect is running')
  // },[count])
  return (
   <div>
    {/* {count}
    <button onClick={inccount}>click to increase</button> */}
    <Navbar/>
    <Section/>
    <div className='doctorparent'>
    <Doctorcard name='Sivaram'  specialization='Bones' gender='male'/>
    <Doctorcard name='Teja'  specialization='Muscles' gender='male'/>
    <Doctorcard name='Vasavi'  specialization='phsycho' gender='female'/>
    <Doctorcard name='Madhu'  specialization='Orthocare' gender='male'/>
    <Doctorcard name='Aditya'  specialization='Skin specialist' gender='male'/>
    <Doctorcard name='John'  specialization='Lungs' gender='male'/>
    </div>
    {/* call here */}
      <Addnewdoctor/>
   </div>
  )
}
export default App