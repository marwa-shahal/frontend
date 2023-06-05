import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Authentication(props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

//   useEffect(() => {
//     if (
//       location.pathname !== "/login" &&
//       location.pathname !== "/PageNotFound" &&
//       !user
//     ) {
//       navigate("/PageNotFound");
//     }
//   }, [user, navigate, location]);

  if (user === undefined) {
    // navigate("/login");
    return <Navigate to="/login" />; // You can return a loading indicator or other component while user is being checked
  }

//   if (!user) {
//     // navigate("/login");
//     return navigate("/login"); // Redirecting, so no need to render anything here
//   }

  return <>{props.children}</>;
}

export default Authentication;
