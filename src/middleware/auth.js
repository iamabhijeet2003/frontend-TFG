// frontend/src/middleware/auth.js

export const authMiddleware = async (to, from, next) => {
    const token = localStorage.getItem("token"); // Get token from local storage
    if (!token && to.path !== '/login') {
      // No token present and not on the login page, redirect to login
      next('/login');
    } else {
      // Token present or on the login page, allow access
      next();
    }
  };
  