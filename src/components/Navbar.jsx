function Navbar() {

  const role = localStorage.getItem("role");

  return (

    <div className="bg-white shadow p-4 flex justify-between">

      <h1 className="text-xl font-bold">
        Employee Management System
      </h1>

      <div className="flex gap-5 items-center">

        <p className="capitalize font-semibold">
          {role}
        </p>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Navbar;