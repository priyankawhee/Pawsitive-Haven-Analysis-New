import React from "react";
import AnimalTypeChart from "./components/AnimalTypeChart";
import MostChosenAnimalsChart from "./components/MostChosenAnimalsChart";
import AdoptionTrendsChart from "./components/AdoptionTrendsChart";
import AdoptionReadinessChart from "./components/AdoptionReadinessChart";

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#333"
};

const Dashboard = ({ pets }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
        padding: "40px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh"
      }}
    >
      <div style={cardStyle}>
        <div style={titleStyle}>Animal Type Distribution</div>
        <AnimalTypeChart pets={pets} />
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Most Chosen Animal Breeds</div>
        <MostChosenAnimalsChart pets={pets} />
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Adoption Trends Over Time</div>
        <AdoptionTrendsChart pets={pets} />
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Adoption Readiness by Record Type</div>
        <AdoptionReadinessChart pets={pets} />
      </div>
    </div>
  );
};

export default Dashboard;
