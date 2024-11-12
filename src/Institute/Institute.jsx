import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../apiConfig";

function Institute() {
  const [institutes, setInstitutes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/institute/`);
        setInstitutes(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-items-center mt-10">
          <div className="col-12">
            <h1 className="text-center text-4xl">Institutes</h1>
          </div>
        </div>

        <div className="row">
          <div className="column-12">
            <div className="max-w-6xl mx-auto mt-4 p-3">
              <Link
                to="/addinstitute"
                className="mb-3 inline-block rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                Add New <i className="fa-solid fa-plus"></i>
              </Link>

              <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Institute
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Country
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Cities
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Contract Ends
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                          {institutes.map((institute, index) => (
                            <tr
                              key={index}
                              className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {institute.institute_name}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                {institute.country}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {institute.cities}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {institute.contract_end}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                                <Link to={`/update/` + institute._id}>
                                  {" "}
                                  <i className="fa-solid fa-pen-to-square me-3 text-blue-500"></i>
                                </Link>
                                <i className="fa-solid fa-eye text-green-500"></i>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institute;
