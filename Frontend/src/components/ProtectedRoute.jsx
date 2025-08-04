// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   // Retrieve the token from localStorage (or use context/state management)
//   const token = localStorage.getItem("token");

//   if (!token) {
//     // If there's no token, redirect to the login page
//     return <Navigate to="/login" replace />;
//   }

//   // If token exists, render the protected content
//   return children;
// };

// export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   // Check if token exists and is valid (optional: validate JWT structure)
//   if (!token || token.length < 20) { // Basic check for a valid JWT
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
