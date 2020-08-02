import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo192.png";
import logo from "./layloRed.png"; // just a good bit of fun (!!)

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/">
        <img src={logo} height={70} />
      </Link>
      <h1>ToDo Manager</h1>
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/contact">
        Contact
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
