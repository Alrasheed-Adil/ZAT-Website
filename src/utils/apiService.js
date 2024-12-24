import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/scholars"; // Replace <PORT> with your backend port

// Create a new scholar
export const createScholar = async (scholar) => {
  try {
    const response = await axios.post(API_BASE_URL, scholar);
    return response.data;
  } catch (error) {
    console.error("Error creating scholar:", error);
    throw error;
  }
};

export const getScholars = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  };

export const updateScholarStatus = async (id, status) => {
    const response = await axios.patch(`${API_BASE_URL}/${id}/status`, { status });
    return response.data;
  };


