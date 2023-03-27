import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileDropdown = () => {
  const profileIcon = useRef(null);
  const { user, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to handle clicks outside the container
    const handleClickOutside = (event) => {
      if (
        profileIcon.current &&
        !profileIcon.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // Add event listener to the document when the component is mounted
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [profileIcon]);

  return (
    isAuthenticated && (
      <div className="container">
        <img
          ref={profileIcon}
          alt={user?.name}
          src={user?.picture}
          className="img-profile-icon"
          onClick={() => setOpen(!open)}
        ></img>
        {open && (
          <div className="dropdown">
            <ul>
              <li onClick={() => navigate(`/stats`)}>View Stats</li>
              <li onClick={() => logout()}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    )
  );
};

export default ProfileDropdown;
