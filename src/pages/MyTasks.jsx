import { useState } from "react";

function MyTasks() {

  const [tasks, setTasks] = useState([]);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        My Tasks
      </h1>

      <div className="bg-white p-5 rounded shadow">

        {tasks.length === 0 ? (

          <p className="text-gray-500">
            No tasks assigned yet.
          </p>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b">

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

          </table>

        )}

      </div>

    </div>

  );
}

export default MyTasks;