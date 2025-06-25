import React from "react";

const Companies = () => {
  return (
    <>
    <div style={{position:"relative"}}>
    <div
      style={{
        margin: "100px 0 130px 0",
        display: "flex",
        justifyContent: "center",
        gap: "128px"
      }}>
      <img src="/companies/Company logo.png" alt="" />
      <img src="/companies/Company logo-1.png" alt="" />
      <img src="/companies/Company logo-2.png" alt="" />
      <img src="/companies/Company logo-3.png" alt="" />
      <img src="/companies/Company logo-4.png" alt="" />
      <img src="/companies/Company logo-5.png" alt="" />

    </div>
    {/* <div style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"20px",position:"absolute",top:"200%",right:"37%"}}>
        <h3 style={{backgroundColor:"#B9FF66",padding:"5px",fontSize:"1.7rem",borderRadius:"10px"}}>Services</h3>
        <p style={{width:"45%"}}>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
    </div> */}
    </div>
    </>
  );
};

export default Companies;
