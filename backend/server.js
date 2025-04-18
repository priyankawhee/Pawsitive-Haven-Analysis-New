const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5000;

app.use(cors());

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// API route to fetch all pet data
app.get("/api/pets", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("pet_dashboard");     // ✅ your DB name
    const collection = database.collection("pets");  // ✅ your collection name

    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error("Error retrieving pet data:", err);
    res.status(500).send("Failed to fetch pet data");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
