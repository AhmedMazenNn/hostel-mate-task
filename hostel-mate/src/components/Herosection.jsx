import React from "react";

const Herosection = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div style={{ maxWidth: "50%", padding: "20px" }}>
        <h1 style={{ width: "40%", fontSize: "3rem" }}>
          Navigating the digital landscape for success
        </h1>
        <p style={{ width: "40%", fontSize: "1rem" }}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button
          style={{
            padding: "15px",
            width: "20%",
            fontSize: "1rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px"
          }}>
          Book a consultation
        </button>
      </div>
      <div>
        <img
          style={{ height: "400px" }}
          src="/Illustration.png"
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default Herosection;
