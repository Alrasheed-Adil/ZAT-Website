import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/scholars"; // Replace <PORT> with your backend port
const SUPPORT_API_BASE_URL = "https://zat-website-api.onrender.com/api/support"; 
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


  export const submitSupportQuestion = async (questionData) => {
    try {
      const response = await axios.post(SUPPORT_API_BASE_URL, questionData);
      return response.data;
    } catch (error) {
      console.error("Error submitting support question:", error);
      throw error;
    }
  };

  export const getAllSupportInquiries = async () => {
    try {
      const response = await axios.get(SUPPORT_API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching support inquiries:", error);
      throw error;
    }
  };
  
  export const updateSupportInquiryStatus = async (id, status) => {
    try {
      const response = await axios.patch(`${SUPPORT_API_BASE_URL}/${id}/status`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating support inquiry status:", error);
      throw error;
    }
  };