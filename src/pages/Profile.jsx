function Profile() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Profile
      </h1>

      <div className="bg-white p-6 rounded shadow w-[500px]">

        <div className="mb-4">

          <h2 className="font-semibold">
            Employee Name
          </h2>

          <p className="text-gray-600">
            Satheesh
          </p>

        </div>

        <div className="mb-4">

          <h2 className="font-semibold">
            Role
          </h2>

          <p className="text-gray-600">
            Frontend Developer
          </p>

        </div>

        <div className="mb-4">

          <h2 className="font-semibold">
            Department
          </h2>

          <p className="text-gray-600">
            Software Development
          </p>

        </div>

      </div>

    </div>

  );
}

export default Profile;