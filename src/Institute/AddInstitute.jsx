import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddInstitute() {
  const institutes = {
    cricos: "",
    institute_name: "",
    country: "",
    cities: "",
    course_levels: "", // This will store the comma-separated string
    contract_end: "",
  };

  const [institute, setInstitute] = useState(institutes);
  const [selectedCourseLevels, setSelectedCourseLevels] = useState([]);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInstitute({ ...institute, [name]: value });
  };

  const handleCourseLevelChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCourseLevels((prev) =>
      checked ? [...prev, value] : prev.filter((level) => level !== value)
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const instituteData = {
      ...institute,
      course_levels: selectedCourseLevels.join(", "), // Join selected values as a string
    };

    try {
      await axios
        .post(
          "https://institutes-server.onrender.com//api/institute/",
          instituteData
        )
        .then((response) => {
          toast.success(response.data.message, { position: "top-right" });

          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [countries, setCountries] = useState([]);
  const courseLevels = [
    "Certificate III",
    "Certificate IV",
    "Diploma",
    "Advanced Diploma",
    "Associate Degree",
    "Bachelor's",
    "Graduate Certificate",
    "Graduate Diploma",
    "Master's",
    "PhD",
  ];

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading country data:", error));
  }, []);

  return (
    <div>
      <div className="container-fuild">
        <div className="row justify-items-center mt-6">
          <div className="columns-2xl">
            <div className="grid justify-items-center">
              <Link
                to="/"
                className="justify-self-center mb-3 inline-block rounded bg-blue-600 px-8 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              >
                Back <i className="fa-solid fa-backward"></i>
              </Link>
            </div>

            <h1 className="text-4xl text-center">Add Institute</h1>

            <div className="max-w-6xl mx-auto mt-4 p-3">
              <form onSubmit={submitForm}>
                {/* Cricos */}
                <div className="py-2">
                  <label
                    htmlFor="instituteName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Cricos
                  </label>
                  <input
                    type="text"
                    id="instituteName"
                    name="cricos"
                    onChange={inputHandler}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                {/* Institute Name */}
                <div className="py-2">
                  <label
                    htmlFor="instituteName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Institute Name
                  </label>
                  <input
                    type="text"
                    id="instituteName"
                    name="institute_name"
                    onChange={inputHandler}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                {/* Country Dropdown */}
                <div className="py-2">
                  <label
                    htmlFor="country"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    onChange={inputHandler}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cities */}
                <div className="py-2">
                  <label
                    htmlFor="cities"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Cities
                  </label>
                  <input
                    type="text"
                    id="cities"
                    name="cities"
                    onChange={inputHandler}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                {/* Course Levels as Checkboxes */}
                <div className="py-2">
                  <label className="block text-xs font-medium text-gray-700">
                    Course Levels
                  </label>
                  <div className="mt-2">
                    {courseLevels.map((level, index) => (
                      <div key={index} className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id={`courseLevel-${index}`}
                          name="courseLevels"
                          value={level}
                          onChange={handleCourseLevelChange}
                          className="mr-2"
                        />
                        <label
                          htmlFor={`courseLevel-${index}`}
                          className="text-sm"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="py-2">
                  <label
                    htmlFor="establishmentDate"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Contract Date
                  </label>
                  <input
                    type="date"
                    id="establishmentDate"
                    name="contract_end"
                    onChange={inputHandler}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="py-4 text-center">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInstitute;
