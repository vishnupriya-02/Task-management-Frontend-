function Reports() {
  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-5 rounded shadow">
          <h2>Total Reports</h2>

          <p className="text-3xl font-bold mt-2">
            28
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2>Approved</h2>

          <p className="text-3xl font-bold mt-2 text-green-500">
            20
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2>Pending</h2>

          <p className="text-3xl font-bold mt-2 text-red-500">
            8
          </p>
        </div>

      </div>

      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="p-3 text-left">
                Employee
              </th>

              <th className="p-3 text-left">
                Report
              </th>

              <th className="p-3 text-left">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="p-3">Rahul</td>
              <td className="p-3">
                Weekly Report
              </td>
              <td className="p-3 text-green-500">
                Approved
              </td>
            </tr>

            <tr>
              <td className="p-3">Satheesh</td>
              <td className="p-3">
                Monthly Report
              </td>
              <td className="p-3 text-red-500">
                Pending
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Reports;