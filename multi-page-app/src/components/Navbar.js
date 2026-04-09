import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/tasks" style={linkStyle}>Tasks</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
};

export default Navbar;