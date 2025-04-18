import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pets")
      .then((response) => setPets(response.data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🐾 Pet Adoption Dashboard 🐾</h1>
      <Dashboard pets={pets} />
    </div>
  );
}

export default App;
