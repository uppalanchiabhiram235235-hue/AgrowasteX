// API Configuration
const API_BASE_URL = 'http://localhost:3000/api';

const api = {
    login: `${API_BASE_URL}/login`,
    wasteEntries: `${API_BASE_URL}/waste-entries`,
    getWasteEntries: (email) => `${API_BASE_URL}/waste-entries/${email}`,
    deleteWasteEntries: (email) => `${API_BASE_URL}/waste-entries/${email}`
};
