import axios from 'axios';

const API_URL = 'https://project-backend-1-z8k0.onrender.com';  // Flask backend URL

// Axios instance to handle API calls
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to handle creating a donation
export const createDonation = async (data, token) => {
  try {
    const response = await api.post('/donations', data, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Include the JWT token
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating donation:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Example function to fetch donations
export const getDonations = async (token) => {
  try {
    const response = await api.get('/donations', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error.response ? error.response.data : error.message);
    throw error;
  }
};