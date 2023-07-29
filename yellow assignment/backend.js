// index.js
const express = require("express");
const app = express();
const port = 3001;

// Sample data for past locations
let pastLocations = [
  { id: 1, name: "Location 1" },
  { id: 2, name: "Location 2" },
  // Add more past locations here...
];

app.use(express.json());

// Endpoint to fetch past locations
app.get("/api/past-locations", (req, res) => {
  res.json(pastLocations);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
