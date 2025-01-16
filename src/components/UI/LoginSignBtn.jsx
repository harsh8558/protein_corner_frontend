import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
const LoginSignBtn = () => {
  return (<>
  <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "inactive")}>
    <div className="flex items-center">
      <div className="flex justify-center items-center gap-1 bg-white hover:bg-green-500 px-2 py-2 rounded-full">
        <div><FontAwesomeIcon icon={faUser} className="bg-gray-300 p-1 rounded-full" /></div>
        <div>Login</div>
        <div></div>
      </div>
    </div>
  </NavLink>

  </>)
}

export default LoginSignBtn;