import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaPhone,
  FaUserMd,
  FaCity,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

const Form = ({ showHide ,defaultCity}) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: defaultCity || "",
    company: "",
    chiefComplaints: "",
    previousExperience: false,
  });

  // const [doctors, setDoctors] = useState([]);
  const [doctordata, setDoctordata] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [availableCities, setAvailableCities] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      previousExperience: !formData.previousExperience,
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/senthil-bala/json-server-fix-health/doctors"
      )
      .then((res) => {
        setDoctordata(res.data);
        const cities = [
          ...new Set(
            res.data.map((doctor) => doctor.city.toLowerCase().trim())
          ),
        ];
        setAvailableCities(cities);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the selected city has doctors
    const hasDoctorsInSelectedCity = doctordata.some(
      (doctor) =>
        doctor.city.toLowerCase().trim() === formData.city.toLowerCase().trim()
    );

    if (!hasDoctorsInSelectedCity) {
      toast.error("Your selected city doesn't have any Doctors");
      return;
    }

    if (
      !selectedDoctor ||
      selectedDoctor === `Select a Doctor in ${formData.city}`
    ) {
      toast.error("Please select a valid doctor!");
      return;
    }

    toast.success(`Appointment booked with ${selectedDoctor}!`);

    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      city: "",
      company: "",
      chiefComplaints: "",
      previousExperience: false,
    });

    setSelectedDoctor("");
  };

  const handleCloseForm = () => {
    showHide();
  };

  return (
    <>
      <div className="text-center">
        <ToastContainer />
      </div>
      <div className="backDrop"></div>

      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <button className="close-button" onClick={handleCloseForm}>
            X
          </button>
          <h1 className="form-heading">Booking Form</h1>

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

          <div className="input-group">
            <FaClipboardList className="icon" />
            <textarea
              name="chiefComplaints"
              placeholder="Chief Complaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {formData.age > 40 && (
            <div className="input-group">
              <input
                style={{ height: "1rem", width: "1rem", marginLeft: "2px" }}
                type="checkbox"
                name="previousExperience"
                checked={formData.previousExperience}
                onChange={handleCheckboxChange}
              />
              <label className="text-black fw-bold">
                Any previous experience with physiotherapy
              </label>
            </div>
          )}

          {availableCities.length > 0 && (
            <div className="input-group">
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option>Select a Doctor in {formData.city}</option>
                {doctordata
                  .filter(
                    (doctor) =>
                      doctor.city.toLowerCase().trim() ===
                      formData.city.toLowerCase().trim()
                  )
                  .map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.expertise}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <button type="submit" className="submit">
            Book Now
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Form;
