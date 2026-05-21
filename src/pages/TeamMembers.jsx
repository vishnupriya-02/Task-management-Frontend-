function TeamMembers() {

  const members = [

    {
      id: 1,
      name: "Rahul",
      status: "Active",
      task: "UI Design",
      progress: "70%",
    },

    {
      id: 2,
      name: "Priya",
      status: "Busy",
      task: "API Development",
      progress: "40%",
    },

    {
      id: 3,
      name: "Arjun",
      status: "Completed",
      task: "Testing",
      progress: "100%",
    },

  ];

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Team Members
      </h1>

      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Current Task
              </th>

              <th className="p-3 text-left">
                Progress
              </th>

            </tr>

          </thead>

          <tbody>

            {members.map((member) => (

              <tr
                key={member.id}
                className="border-b"
              >

                <td className="p-3">
                  {member.name}
                </td>

                <td
                  className={`p-3 font-semibold ${
                    member.status === "Completed"
                      ? "text-green-500"
                      : member.status === "Busy"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                >
                  {member.status}
                </td>

                <td className="p-3">
                  {member.task}
                </td>

                <td className="p-3">
                  {member.progress}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default TeamMembers;