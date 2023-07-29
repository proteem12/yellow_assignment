// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [pastLocations, setPastLocations] = useState([]);

  useEffect(() => {
    //fetch user's current location
    const getUserLocation = () => {
      // geolocation code here, get user current location
      const latitude = 123.456; // Replace with actual latitude
      const longitude = 456.789; // Replace with actual longitude
      fetchRestaurants(latitude, longitude);
    };

    //fetch the list of restaurants using Google Places API
    const fetchRestaurants = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `YOUR_GOOGLE_PLACES_API_URL?latitude=${latitude}&longitude=${longitude}&radius=5000&type=restaurant&key=YOUR_API_KEY`
        );
        setRestaurants(response.data.results);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    //to fetch past 10 locations
    const fetchPastLocations = async () => {
      try {
        const response = await axios.get("/api/past-locations");
        setPastLocations(response.data);
      } catch (error) {
        console.error("Error fetching past locations:", error);
      }
    };

    getUserLocation();
    fetchPastLocations();
  }, []);

  return (
    <div>
      <h1>Restaurants Near You</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
      <h2>Past Locations</h2>
      <ul>
        {pastLocations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
      {/* render map here using google map api */}
    </div>
  );
};

export default App;
