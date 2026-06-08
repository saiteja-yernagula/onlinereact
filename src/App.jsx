import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
import Addnewdoctor from "./components/Addnewdoctor"
import { Route, Routes } from "react-router-dom"
import Doctordetails from "./components/Doctordetails"

function App(){
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/add-doctor' element={<Addnewdoctor/>}/>
      <Route path='/doctor/:id'element={<Doctordetails/>}/>
    </Routes>
   </div>
  )
}
export default App