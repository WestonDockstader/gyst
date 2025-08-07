import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend server running on port 3001
  withCredentials: true, // Important for session-based auth
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth service object with all authentication-related API calls
export const authService = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Register new user
  register: async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Logout user
  logout: async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  },

  // Get current authenticated user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error) {
      throw new Error('Not authenticated');
    }
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    try {
      await api.get('/api/auth/me');
      return true;
    } catch (error) {
      return false;
    }
  }
};

// Export the configured axios instance for other services to use
export default api;
