// API Configuration
// For local development: 'http://localhost:3000/api'
// For production: Replace with your Vercel URL
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : 'https://agrowastex.vercel.app/api'; // Replace with YOUR Vercel URL

const api = {
    login: `${API_BASE_URL}/login`,
    wasteEntries: `${API_BASE_URL}/waste-entries`,
    getWasteEntries: (email) => `${API_BASE_URL}/waste-entries/${email}`,
    deleteWasteEntries: (email) => `${API_BASE_URL}/waste-entries/${email}`
};
