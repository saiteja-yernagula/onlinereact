import { useState } from "react";
import Home from "./Home";
import axios from "axios";
function Addnewdoctor() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [specialization, setSpecialization] = useState("");
  let [newdoctor, setNewdoctor] = useState(null);

  async function handlesubmit(e) {
    e.preventDefault();
    let formdata = {
      name,
      age,
      gender,
      salary,
      specialization,
      id: Date.now(),
    };
    await axios.post("https://doc-back.onrender.com/doctors", formdata);
    alert("Doctor Added Successfully");
    
    setNewdoctor(formdata);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add New Doctor</h1>
      <form action="" className="form-container" onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Doctor Name"
          className="text-field"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Enter Age"
          className="text-field"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option>Select Gender</option>
          <option value="Male"> Male</option>
          <option value="Female"> Female</option>
        </select>

        <input
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
          placeholder="Enter Specialization"
          className="text-field"
        />
        <input
          value={salary}
          type="text"
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter Salary"
          className="text-field"
        />
        <button type="submit"> Add Doctor</button>
      </form>
      <Home newdoctor={newdoctor} />
    </div>
  );
}

export default Addnewdoctor;
