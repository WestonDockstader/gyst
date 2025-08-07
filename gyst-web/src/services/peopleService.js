import api from './authService';

// People service object with all people/network-related API calls
export const peopleService = {
  // Get all people in the network
  getAllPeople: async () => {
    try {
      const response = await api.get('/api/people');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch people');
    }
  },

  // Get a specific person by ID
  getPersonById: async (id) => {
    try {
      const response = await api.get(`/api/people/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch person');
    }
  },

  // Search people by query
  searchPeople: async (query) => {
    try {
      const response = await api.get(`/api/people/search?q=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search people');
    }
  }
};
