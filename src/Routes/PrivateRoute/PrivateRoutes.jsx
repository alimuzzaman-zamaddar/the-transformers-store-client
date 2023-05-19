import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoutes = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}}  to='/login' replace ></Navigate>
};

export default PrivateRoutes;