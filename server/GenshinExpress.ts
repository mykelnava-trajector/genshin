import axios from "axios";

const API_BASE_URL = "https://api.genshin.dev";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export const fetchWeapons = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weapons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weapons:", error);
    return [];
  }
};
