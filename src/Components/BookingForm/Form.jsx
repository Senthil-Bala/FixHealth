import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaPhone, FaUserMd, FaCity, FaBuilding, FaClipboardList } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import "./Form.css";
import Customers from "./Customers.webp";

const Form = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: false,
  });

  // Doctors state
  const [doctors, setDoctors] = useState([]);
  const [doctordata, setdoctordata] = useState([])

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle previous experience checkbox change
  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      previousExperience: !formData.previousExperience,
    });
  };

  useEffect(()=>{
    axios.get("http://localhost:3001/doctors")
    .then((res)=>{
      setdoctordata(res.data);
      console.log(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])

  // Handle form submission
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(formData);

    

    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      city: "",
      company: "",
      chiefComplaints: "",
      previousExperience: false,
    });
  };

  return (
    <div className="text-center">
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Step 1: Name + Phone number */}
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon">
            <FaPhone />
          </span>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Step 2: Age + City + Company */}
        <div className="input-group">
          <FaUserMd className="icon" />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <FaCity className="icon" />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <FaBuilding className="icon" />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        {/* Step 3: Chief complaints */}
        <div className="input-group">
          <FaClipboardList className="icon" />
          <textarea
            name="chiefComplaints"
            placeholder="Chief Complaints"
            value={formData.chiefComplaints}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Step 4: Any previous experience with physiotherapy */}
        {formData.age > 40 ? (
          <div className="input-group">
            {formData.previousExperience ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            <input
              type="checkbox"
              name="previousExperience"
              checked={formData.previousExperience}
              onChange={handleCheckboxChange}
            />
            <span>Any previous experience with physiotherapy</span>
          </div>
        ) : null}

        <button type="submit" className="submit">
          Submit
        </button>
        <br />
        <img src={Customers} alt="Customers" style={{ height: "3rem", width: "20rem", marginTop: "1rem" }} />
      </form>

      {/* Display doctors based on the selected city */}
      {doctors.length > 0 && (
        <div>
          <label>Best Available Doctors in {formData.city}</label>
          <select value={doctors}>
            {doctors.map((doctor) => (
              <option key={doctor.id}>
                {doctor.name} - {doctor.expertise}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Form;
