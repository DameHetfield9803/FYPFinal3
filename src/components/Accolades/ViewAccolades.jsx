import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewAccolades.css";
import EmployeeNavBar from '../NavBar/EmployeeNavBar';

const ViewAccolades = () => {
  const [accolades, setAccolades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedAccolade, setSelectedAccolade] = useState(null);
  const [accoladeData, setAccoladeData] = useState({
    accolade_id: "",
    accolade_title: "",
    completion_date: "",
    achievement_level: "",
    staff_id: "",
  });

  const fetchAccolades = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getaccolade");
      console.log("Response from server:", response.data);
      setAccolades(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching accolades:", error);
      setError("Error fetching accolades. Please check your server and try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccolades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (accoladeId) => {
    // Validation before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this accolade?");
    if (!confirmDelete) {
      return; // If user cancels deletion, exit function
    }

    try {
      console.log("Deleting accolade with ID:", accoladeId);
      await axios.delete("http://localhost:3001/deleteaccolade", { data: { accolade_id: accoladeId } });
      console.log("Accolade deleted successfully");

      // Show popup message after deletion
      setPopupMessage("Accolade deleted successfully");
      setShowPopup(true);

      // After deletion, fetch updated accolades data
      fetchAccolades();
    } catch (error) {
      console.error("Error deleting accolade:", error);
      // Handle error, show error message, etc.
    }
  };

  const handleEdit = (accolade) => {
    setSelectedAccolade(accolade);
    setAccoladeData({
      accolade_id: accolade.accolade_id,
      accolade_title: accolade.accolade_title,
      completion_date: accolade.completion_date,
      achievement_level: accolade.achievement_level,
      staff_id: accolade.staff_id,
    });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccoladeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform update request with accoladeData
    try {
      await axios.put(`http://localhost:3001/updateaccolade/${selectedAccolade.accolade_id}`, accoladeData);
      // Optionally handle success
      setPopupMessage("Accolade updated successfully");
      setShowPopup(true);
      fetchAccolades(); // Refresh accolades after update
    } catch (error) {
      console.error("Error updating accolade:", error);
      // Handle error
    }
  };

  return (
    <div>
      <EmployeeNavBar></EmployeeNavBar>
      <h1>Overall Accolades</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {accolades && accolades.length > 0 ? (
        <table className="accolades-table">
          <thead>
            <tr>
              <th>Accolade ID</th>
              <th>Staff ID</th>
              <th>Accolade Title</th>
              <th>Completion Date</th>
              <th>Achievement Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {accolades.map((accolade, index) => (
              <tr key={index}>
                <td>{accolade.accolade_id}</td>
                <td>{accolade.staff_id}</td>
                <td>{accolade.accolade_title}</td>
                <td>{accolade.completion_date}</td>
                <td>{accolade.achievement_level}</td>
                <td>
                  <button onClick={() => handleEdit(accolade)}>Edit</button>
                  <button onClick={() => handleDelete(accolade.accolade_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No accolades to display</p>
      )}

      {/* Popup message */}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Accolade edit form */}
      {selectedAccolade && (
        <div>
          <h3>Edit Accolade</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Accolade Title:
              <input
                type="text"
                name="accolade_title"
                value={accoladeData.accolade_title}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Completion Date:
              <input
                type="date"
                name="completion_date"
                value={accoladeData.completion_date}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Achievement Level:
              <input
                type="text"
                name="achievement_level"
                value={accoladeData.achievement_level}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Staff ID:
              <input
                type="text"
                name="staff_id"
                value={accoladeData.staff_id}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Update Accolade</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewAccolades;
