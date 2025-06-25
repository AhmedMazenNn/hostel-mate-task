import React from "react";

const LetsMake = () => {
  return (
    <div
      className="d-flex flex-wrap align-items-center justify-content-between rounded-5 p-4"
      style={{
        backgroundColor: "#F3F3F3",
        margin: "0 auto",
        width: "80%",
      }}
    >
      <div style={{ flex: "1 1 50%", padding: "20px" }}>
        <h2 className="mb-3">Let’s make things happen</h2>
        <p className="mb-4">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button
          className="request"
          style={{
            padding: "15px 25px",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "white",
            border: "none",
          }}
        >
          Get your free proposal
        </button>
      </div>

      <div style={{ flex: "1 1 40%", padding: "20px" }}>
        <img
          src="/Letsmake.png"
          alt="Let's Make"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default LetsMake;
