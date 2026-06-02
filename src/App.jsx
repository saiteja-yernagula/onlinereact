import Doctorcard from "./components/Doctorcard"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
function App(){
  return (
   <div>
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

   </div>
  )
}
export default App