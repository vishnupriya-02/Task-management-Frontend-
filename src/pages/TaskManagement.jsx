import { useState } from "react";

function TaskManagement() {

  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    employee: "",
    task: "",
    priority: "",
    dueDate: "",
    status: "Pending",
  });

  const teamMembers = [
    "Rahul",
    "Priya",
    "Arjun",
  ];

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleAssignTask = () => {

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      ...formData,
    };

    setTasks([...tasks, newTask]);

    setShowModal(false);

    setFormData({
      employee: "",
      task: "",
      priority: "",
      dueDate: "",
      status: "Pending",
    });

  };

  return (

    <div>

      {/* Header */}
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Task Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Assign Task
        </button>

      </div>

      {/* Task Table */}
      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Employee
              </th>

              <th className="p-3 text-left">
                Task
              </th>

              <th className="p-3 text-left">
                Priority
              </th>

              <th className="p-3 text-left">
                Due Date
              </th>

              <th className="p-3 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task.id}
                className="border-b"
              >

                <td className="p-3">
                  {task.employee}
                </td>

                <td className="p-3">
                  {task.task}
                </td>

                <td className="p-3">
                  {task.priority}
                </td>

                <td className="p-3">
                  {task.dueDate}
                </td>

                <td className="p-3 text-yellow-500">
                  {task.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">

            <h2 className="text-2xl font-bold mb-6">
              Assign Task
            </h2>

            {/* Employee */}
            <select
              name="employee"
              value={formData.employee}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            >

              <option value="">
                Select Employee
              </option>

              {teamMembers.map((member, index) => (

                <option key={index}>
                  {member}
                </option>

              ))}

            </select>

            {/* Task */}
            <input
              type="text"
              name="task"
              placeholder="Task Name"
              value={formData.task}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            {/* Priority */}
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            >

              <option value="">
                Select Priority
              </option>

              <option>High</option>
              <option>Medium</option>
              <option>Low</option>

            </select>

            {/* Due Date */}
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAssignTask}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Assign
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default TaskManagement;