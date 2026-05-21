function DashBoard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">
            Total Employees
          </h2>

          <p className="text-3xl font-bold mt-2">
            25
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">
            Pending Tasks
          </h2>

          <p className="text-3xl font-bold mt-2 text-red-500">
            12
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">
            Completed Tasks
          </h2>

          <p className="text-3xl font-bold mt-2 text-green-500">
            40
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">
            Reports Submitted
          </h2>

          <p className="text-3xl font-bold mt-2">
            18
          </p>
        </div>

      </div>

      {/* Pending Tasks */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-bold mb-4">
          Pending Tasks
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                Employee
              </th>

              <th className="text-left p-3">
                Task
              </th>

              <th className="text-left p-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="p-3">Rahul</td>
              <td className="p-3">
                UI Design
              </td>
              <td className="p-3 text-red-500">
                Pending
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3"> Satheesh </td>
              <td className="p-3">
                API Integration
              </td>
              <td className="p-3 text-yellow-500">
                In Progress
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DashBoard;