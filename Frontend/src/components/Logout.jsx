import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser(null); // Clear authentication state
      localStorage.removeItem("token"); // Ensure token is removed
      toast.success("Logout successful");

      setTimeout(() => {
        navigate("/login"); // Redirect to login
        window.location.reload(); // Force re-render
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
