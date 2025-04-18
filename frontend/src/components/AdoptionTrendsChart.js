import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AdoptionTrendsChart = ({ pets }) => {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    if (!pets || pets.length === 0) return;

    console.log("Raw Pets:", pets); // Debug: raw data

    const monthMap = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const monthlyCount = {};

    pets.forEach((pet) => {
      if (pet.Date) {
        const date = new Date(Date.parse(pet.Date));
        if (!isNaN(date)) {
          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          const key = `${month} ${year}`;

          monthlyCount[key] = (monthlyCount[key] || 0) + 1;
        }
      }
    });

    const formattedData = Object.entries(monthlyCount)
      .map(([month, count]) => ({ month, count }))
      .sort((a, b) => {
        const [aMonth, aYear] = a.month.split(" ");
        const [bMonth, bYear] = b.month.split(" ");
        const aDate = new Date(Number(aYear), monthMap[aMonth]);
        const bDate = new Date(Number(bYear), monthMap[bMonth]);
        return aDate - bDate;
      });

    console.log("Trend Data:", formattedData); // Debug: processed data

    setTrendData(formattedData);
  }, [pets]);

  return (
    <div>
      <h2>Monthly Received Pets</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdoptionTrendsChart;
