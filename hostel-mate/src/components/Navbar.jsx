import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const links = [
    { to: "/about", label: "About us" },
    { to: "/services", label: "Services" },
    { to: "/use-cases", label: "Use Cases" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" }
  ];
  return (
    <nav
      style={{
        margin: "0 50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
      <h2 className="logo" style={{ display: "flex", alignItems: "center" }}>
        <img src="/Icon.png" alt="Icon" />Positivus
      </h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {links.map(link =>
          <Link
            style={{ padding: "20px", textDecoration: "none", color: "black" }}
            key={link.to}
            to={link.to}>
            {link.label}
          </Link>
        )}
        <button
          className="request"
          style={{
            padding: "20px",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "white"
          }}>
          Request a quote
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
