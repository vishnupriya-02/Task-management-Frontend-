import { useState } from "react";

function UpdateStatus() {

  const [status, setStatus] =
    useState("In Progress");

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Update Status
      </h1>

      <div className="bg-white p-6 rounded shadow w-[400px]">

        <label className="block mb-3 font-semibold">

          Current Status

        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        >

          <option>
            Pending
          </option>

          <option>
            In Progress
          </option>

          <option>
            Completed
          </option>

        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Status
        </button>

      </div>

    </div>

  );
}

export default UpdateStatus;