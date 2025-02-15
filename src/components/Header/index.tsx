import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <h1 className="header__title">Online Betting Dashboard</h1>
      <button onClick={handleLogout} className="btn btn--logout">
        Logout
      </button>
    </header>
  );
};

export default Header;
