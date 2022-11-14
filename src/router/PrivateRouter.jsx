import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/AuthContext";



const PrivateRouter = () => {
    const user =  useContext(UserContext);
    
    return user ? <Outlet /> : (
        <Navigate to="/login" replace/>
        
        
    )
    
  };

  export default PrivateRouter;