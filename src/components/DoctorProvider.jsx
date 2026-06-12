import { createContext,useState } from "react"
import axios from "axios"

export const DoctorContext=createContext()

function DoctorProvider({children}) {
   let [newdoctor, setNewdoctor] = useState(null);
     async function deletedata(id){
    await axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
    alert('doctor deleted')
    setNewdoctor('deleted'+ id);
  }
  async function updatedata(id){
    let data={
    name: "Manohar",
    age: "57",
    gender: "Male",
    salary: "8900000",
    specialization: "Surgeon",
    id: Date.now()
    }
    await axios.put(`https://doc-back.onrender.com/doctors/${id}`,data)
    alert('updated')
        setNewdoctor('updaated'+ id);
  }


  return (
    <DoctorContext.Provider value={{newdoctor,setNewdoctor,updatedata,deletedata}}>
        {children}
    </DoctorContext.Provider>
  )
}

export default DoctorProvider