import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getSampleData: function() {
    return axios.get("https://api.weatherapi.com/v1/forecast.json?key=b954a8a0fe044aa4b25173138202411&q=London&days=3")
  }
};
