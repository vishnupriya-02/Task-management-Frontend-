function ApprovalManagement() {
  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Approval Management
      </h1>

      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Employee
              </th>

              <th className="p-3 text-left">
                Request
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="p-3">
                Rahul
              </td>

              <td className="p-3">
                Leave Request
              </td>

              <td className="p-3 text-yellow-500">
                Pending
              </td>

              <td className="p-3">

                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                  Approve
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Reject
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default ApprovalManagement;