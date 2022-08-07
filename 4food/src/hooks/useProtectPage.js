import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/coordinator";

export const useProtectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasAddress = localStorage.getItem("hasAddress");
    if (!token) {
      goToPage(navigate, "/login");
    }
    if (hasAddress === "false") {    
      goToPage(navigate, "/address");
    }
  }, [navigate]);
};
