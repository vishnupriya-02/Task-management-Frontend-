import { useState } from "react";

function CreateTeam() {

  const [showModal, setShowModal] = useState(false);

  const [teams, setTeams] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [memberInput, setMemberInput] = useState("");

  const [formData, setFormData] = useState({
    teamName: "",
    members: [],
    teamLead: "",
  });

  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Add Member
  const handleAddMember = () => {

    if (
      memberInput.trim() !== "" &&
      !formData.members.includes(memberInput)
    ) {

      setFormData({
        ...formData,
        members: [
          ...formData.members,
          memberInput,
        ],
      });

      setMemberInput("");
    }

  };

  // Delete Member
  const handleDeleteMember = (memberToDelete) => {

    const updatedMembers =
      formData.members.filter(
        (member) => member !== memberToDelete
      );

    setFormData({
      ...formData,
      members: updatedMembers,
    });

  };

  // Create or Update Team
  const handleSaveTeam = () => {

    // Update Existing
    if(editingId !== null) {

      const updatedTeams = teams.map((team) =>

        team.id === editingId
          ? { ...team, ...formData }
          : team

      );

      setTeams(updatedTeams);

    }

    // Create New
    else {

      const newTeam = {
        id: Math.floor(Math.random() * 10000),
        ...formData,
      };

      setTeams([...teams, newTeam]);
    }

    // Reset
    setShowModal(false);

    setEditingId(null);

    setFormData({
      teamName: "",
      members: [],
      teamLead: "",
    });

  };

  // Delete Team
  const handleDeleteTeam = (id) => {

    const filteredTeams =
      teams.filter((team) => team.id !== id);

    setTeams(filteredTeams);

  };

  // Edit Team
  const handleEditTeam = (team) => {

    setFormData(team);

    setEditingId(team.id);

    setShowModal(true);

  };

  return (

    <div>

      {/* Header */}
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Team Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Team
        </button>

      </div>

      {/* Team Table */}
      <div className="bg-white p-5 rounded shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Team ID
              </th>

              <th className="p-3 text-left">
                Team Name
              </th>

              <th className="p-3 text-left">
                Members
              </th>

              <th className="p-3 text-left">
                Team Lead
              </th>

              <th className="p-3 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {teams.map((team) => (

              <tr key={team.id} className="border-b">

                <td className="p-3">
                  {team.id}
                </td>

                <td className="p-3">
                  {team.teamName}
                </td>

                <td className="p-3">

  <div className="flex flex-col gap-2">

    {team.members.map((member, index) => (

      <div
        key={index}
        className="bg-blue-100 text-blue-700 px-3 py-1 rounded"
      >
        {member}
      </div>

    ))}

  </div>

</td>

                <td className="p-3 text-blue-600 font-semibold">
                  {team.teamLead}
                </td>

                <td className="p-3 flex gap-3">

                  <button
                    onClick={() => handleEditTeam(team)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDeleteTeam(team.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Popup Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">

            <h2 className="text-2xl font-bold mb-6">

              {editingId !== null
                ? "Update Team"
                : "Create Team"}

            </h2>

            {/* Team Name */}
            <input
              type="text"
              name="teamName"
              placeholder="Team Name"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full border p-3 mb-4 rounded"
            />

            {/* Members */}
            <div className="flex gap-3 mb-4">

              <input
                type="text"
                placeholder="Enter Member Name"
                value={memberInput}
                onChange={(e) =>
                  setMemberInput(e.target.value)
                }
                className="w-full border p-3 rounded"
              />

              <button
                type="button"
                onClick={handleAddMember}
                className="bg-blue-600 text-white px-5 rounded"
              >
                +
              </button>

            </div>

            {/* Member Tags */}
            <div className="flex flex-wrap gap-2 mb-4">

              {formData.members.map((member, index) => (

                <div
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
                >

                  {member}

                  <button
                    onClick={() =>
                      handleDeleteMember(member)
                    }
                    className="text-red-500 font-bold"
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

            {/* Team Lead */}
        <select
        name="teamLead"
        value={formData.teamLead}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
        >

        <option value="">
            Select Team Lead
        </option>

        {formData.members.map((member, index) => (

            <option key={index}>
            {member}
            </option>

        ))}

        </select>

            {/* Buttons */}
            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveTeam}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >

                {editingId !== null
                  ? "Update"
                  : "Create"}

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default CreateTeam;