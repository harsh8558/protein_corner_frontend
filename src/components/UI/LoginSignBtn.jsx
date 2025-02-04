import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import LoginSignModal from "../Modal/LoginSignModal"
import { useState } from "react";

const LoginSignBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (<>
  {/* <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "inactive")}>
    <div className="hidden md:flex items-center">
      <div className="flex justify-center items-center gap-1 bg-white hover:bg-green-500 px-2 py-2 rounded-full">
        <div><FontAwesomeIcon icon={faUser} className="bg-gray-300 p-1 rounded-full" /></div>
        <div>Login</div>
        <div></div>
      </div>
    </div>

    <div className="md:hidden flex items-center">
      <div className="flex justify-center items-center gap-1 bg-white hover:bg-green-500 px-2 py-2 rounded-full">
        <div><FontAwesomeIcon icon={faUser} className="px-1 text-[15px] rounded-[50%]" /></div>
      </div>
    </div>
  </NavLink> */}

  {/* Desktop */}
  <div onClick={openModal} className="hidden md:flex items-center cursor-pointer">
    <div className="flex justify-center items-center gap-1 bg-white hover:bg-green-500 px-2 py-2 rounded-full">
      <div><FontAwesomeIcon icon={faUser} className="bg-gray-300 p-1 rounded-full" /></div>
      <div>Login</div>
      <div></div>
    </div>
  </div>
  {/* Mobile */}
  <div 
    onClick={openModal} 
    className="md:hidden flex items-center cursor-pointer">
    <div className="flex justify-center items-center gap-1 bg-white hover:bg-green-500 px-2 py-2 rounded-full">
      <div><FontAwesomeIcon icon={faUser} className="px-1 text-[15px] rounded-[50%]" /></div>
    </div>
  </div>

  <LoginSignModal isOpen={isModalOpen} onClose={closeModal} />  
</>)
}

export default LoginSignBtn;