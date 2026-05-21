import { useState } from "react";

function EmployeeManagement() {

  const [showModal, setShowModal] = useState(false);

  const [employees, setEmployees] = useState([
    {
      id: 1001,
      name: "Rahul",
      email: "rahul@gmail.com",
      department: "Frontend",
      status: "Active",
    },

    {
      id: 1002,
      name: "Satheesh",
      email: "satheesh@gmail.com",
      department: "Backend",
      status: "Leave",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = () => {

    const newEmployee = {
      id: Math.floor(Math.random() * 10000),
      ...formData,
    };

    setEmployees([...employees, newEmployee]);

    setShowModal(false);

    setFormData({
      name: "",
      email: "",
      department: "",
      status: "Active",
    });
  };

  return (

    <div>

      {/* Header */}
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Employee Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>

      </div>

      {/* Employee Table */}
      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                ID
              </th>

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Department
              </th>

              <th className="p-3 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr key={employee.id} className="border-b">

                <td className="p-3">
                  {employee.id}
                </td>

                <td className="p-3">
                  {employee.name}
                </td>

                <td className="p-3">
                  {employee.email}
                </td>

                <td className="p-3">
                  {employee.department}
                </td>

                <td
                  className={`p-3 ${
                    employee.status === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {employee.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Modal Popup */}
      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-lg shadow-lg w-96">

            <h2 className="text-2xl font-bold mb-6">
              Add Employee
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Employee Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            >
              <option>Active</option>
              <option>Leave</option>
            </select>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAddEmployee}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default EmployeeManagement;