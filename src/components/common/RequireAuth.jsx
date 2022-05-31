import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import {
    setIsLoginOpen
  } from "../../store/actions/userActions";

const RequireAuth = () => {
    const { isLoggedIn } = useSelector(state=>state.userReducer);
    const location = useLocation();
    const dispatch = useDispatch();

    const openLoginDialog = () => {
        dispatch(setIsLoginOpen(true));        
        return true;
    }

    return (
        isLoggedIn
            ? <Outlet />
            :  openLoginDialog() && <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;