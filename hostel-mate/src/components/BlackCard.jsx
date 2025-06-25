import React from "react";
import {ArrowUpRight} from 'lucide-react'

const BlackCard = () => {
  return (
    <>
    <div style={{display:"flex",backgroundColor:"#191A23",border:"1px solid black",borderRadius:"10px",width:"20%",padding:"20px"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"50px"}}>
      <h2 ><mark style={{backgroundColor:"white"}}> Search engine optimization</mark></h2>
      <div style={{display:"flex",alignItems:"center",gap:"10px",color:"white"}}> <ArrowUpRight style={{backgroundColor:"white",color:"black",borderRadius:"20px"}} />learn more</div>
    </div>
    <img src="/cards/Illustration-1.png" alt="" />
    </div>
    </>
  );
};

export default BlackCard;
