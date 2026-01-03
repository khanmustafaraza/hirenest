import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Protected = () => {
  const { state, handleLogout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isAdminVerified, setIsAdminVerified] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = state.user?.token || localStorage.getItem("token");

      // Wait until token is hydrated from localStorage
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/admin/admin-route`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          toast.warning(data.message || "Access denied. Admins only.");
          setIsAdminVerified(false);
          handleLogout(); // optional: log out the user
        } else {
          setIsAdminVerified(true);
        }
      } catch (error) {
        toast.error("Failed to verify admin access.");
        setIsAdminVerified(false);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [state.user.token]);

  // Wait for verification to finish
  if (loading) return <div>Loading...</div>;

  // Redirect if not logged in or not admin
  if (!state.user.token || !isAdminVerified) {
    return <Navigate to="/login" replace />;
  }

  // Render nested routes if admin is verified
  return <Outlet />;
};

export default Protected;
