import { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";
function Home({ newdoctor }) {
  let [doctors, setDoctors] = useState([]);
  let [search, setSearch] = useState("");
  let [specialization, setSpecialization] = useState("");
  async function fetchdata() {
   
    let apidata=await axios.get('https://doc-back.onrender.com/doctors')
    // console.log(apidata)
    setDoctors(apidata.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (newdoctor) {
      setDoctors((prev) => [...prev, newdoctor]);
    }
  }, [newdoctor]);

  const filtereddoctors=doctors.filter((val)=>{
    console.log()
    console.log(search)
    return (
      val.name.toLowerCase().includes(search.toLowerCase())
      &&
      (specialization=="" || val.specialization==specialization)
    )
  })
  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          value={search}
          placeholder="search doctor"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="text-field"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>
      {filtereddoctors.length > 0 ? (
        <div className="doctorparent">
          {filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
                key={doctor.id}
                name={doctor.name}
                gender={doctor.gender}
                specialization={doctor.specialization}
                id={doctor.id}
              />
            );
          })}
        </div>
      ) : (
        <h1>no doctors found</h1>
      )}
    </div>
  );
}

export default Home;
