import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/coordinator";

export const useUnprotectPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToPage(navigate,"/")
        }
    },[navigate])
};
