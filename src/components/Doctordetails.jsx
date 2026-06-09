import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
function Doctordetails() {
    let {id}=useParams()
    let [doctor,setDoctor]=useState([])

    async function fetchdata(){
     let apidata= await axios.get('https://doc-back.onrender.com/doctors')
    let data=apidata.data;
    
    let doc=data.find((val)=> val.id==id)
    setDoctor(doc)

    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
        <h1>Doctor details</h1>
        <h1>{doctor.name}</h1>
        <h2>{doctor.gender}</h2>
        <h6>{doctor.age}</h6>
        <h2>{doctor.specialization}</h2>
        <h2>{doctor.salary}</h2>
    </div>
  )
}

export default Doctordetails