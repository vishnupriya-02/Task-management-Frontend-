import { useState } from "react";

function DailyReport() {

  const [report, setReport] = useState("");

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Daily Report
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <textarea
          placeholder="Enter today's work report..."
          value={report}
          onChange={(e) =>
            setReport(e.target.value)
          }
          className="w-full border p-4 rounded h-40"
        />

        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Report
        </button>

      </div>

    </div>

  );
}

export default DailyReport;