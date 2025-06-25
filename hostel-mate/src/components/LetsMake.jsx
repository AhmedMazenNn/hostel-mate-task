import React from "react";

const LetsMake = () => {
  return (
    <>
    
  <div className="d-flex flex-wrap align-items-center rounded-5" style={{backgroundColor: "#F3F3F3",margin: "0 auto",width:"80%",gap:"400px"}}>
    <div
      style={{
        width: "30%",
        marginLeft:"50px"

        
      }}>
      <h2>Let’s make things happen</h2>
      <p>
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>
      <button
        className="request"
        style={{
          padding: "20px",
          borderRadius: "15px",
          backgroundColor: "black",
          color: "white"
        }}>
        Get your free proposal
      </button>
    </div>
    <div>
        <img src="../../public/Letsmake.png" alt="" />
    </div>
    </div>
    </>
  );
};

export default LetsMake;
