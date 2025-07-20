import api from './api';

export const orderService = {
  // Get all restaurants
  getRestaurants: async (filters = {}) => {
    try {
      const response = await api.get('/restaurants', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch restaurants' };
    }
  },

  // Get restaurant by ID
  getRestaurant: async (id) => {
    try {
      const response = await api.get(`/restaurants/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch restaurant' };
    }
  },

  // Get food items by restaurant
  getFoodItems: async (restaurantId, filters = {}) => {
    try {
      const response = await api.get(`/restaurants/${restaurantId}/menu`, { 
        params: filters 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch menu items' };
    }
  },

  // Search food items
  searchFoodItems: async (query, filters = {}) => {
    try {
      const response = await api.get('/search', { 
        params: { q: query, ...filters } 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Search failed' };
    }
  },

  // Get food categories
  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch categories' };
    }
  },

  // Create new order
  createOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create order' };
    }
  },

  // Get user orders
  getUserOrders: async (status = null) => {
    try {
      const params = status ? { status } : {};
      const response = await api.get('/orders', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch orders' };
    }
  },

  // Get order by ID
  getOrder: async (id) => {
    try {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch order' };
    }
  },

  // Update order status
  updateOrderStatus: async (id, status) => {
    try {
      const response = await api.put(`/orders/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update order status' };
    }
  },

  // Cancel order
  cancelOrder: async (id) => {
    try {
      const response = await api.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to cancel order' };
    }
  },

  // Rate order
  rateOrder: async (id, rating, review = '') => {
    try {
      const response = await api.post(`/orders/${id}/rating`, {
        rating,
        review
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to submit rating' };
    }
  },

  // Get delivery estimate
  getDeliveryEstimate: async (restaurantId, address) => {
    try {
      const response = await api.post('/delivery/estimate', {
        restaurantId,
        address
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get delivery estimate' };
    }
  },

  // Track order
  trackOrder: async (id) => {
    try {
      const response = await api.get(`/orders/${id}/track`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to track order' };
    }
  }
};
