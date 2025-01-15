
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav">
        <h1>Sandhya Sawalkar Directory App</h1>
      </div>
      <div className="navigation">
        <button className="navigation-btn" onClick={() => navigate("/person")}>Add New Person</button>
        <button className="navigation-btn" onClick={() => navigate("/info")}>Retrieve Infromation</button>
      </div>
    </>
  )
}
