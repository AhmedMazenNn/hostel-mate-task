import React from "react";
import {ArrowUpRight} from 'lucide-react'

const GrayCard = () => {
  const backgroundColors = [
    
    {
      color:"#f3f3f3",
      images:["/cards/Illustration.png"],
      text:"Search engine optimization",
      
    },
    {
      color:"#B9FF66",
      images:["/cards/tokyo-selecting-a-value-in-the-browser-window 1.png"],
      text:"Pay-per-click advertising"
    },
    {
      color:"black",
      images:["/cards/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"],
      text:"Social media marketing"
    },
    {
      color:"#f3f3f3",
      images:["/cards/tokyo-sending-messages-from-one-place-to-another 1.png"],
      text:"Email Marketing"
    },
    {
      color:"#B9FF66",
      images:["/cards/Illustration-2.png"],
      text:"Content Creation"
    },
    {
      color:"black",
      images:["/cards/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"],
      text:"Analytics and Tracking"
    }

  ]
  return (
    <>
    <div className="row " style={{width:"80%",margin:"0 auto"}}>
    {backgroundColors.map((color)=> 
      <div className="col-md-6 col-sm-1 py-5">
    <div className="shadow" style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:`${color.color}`,border:"1px solid black",borderRadius:"10px",padding:"20px",height:"250px"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"50px"}}>
      {color.color === "black" || color.color === "#B9FF66" ? <h2 style={{width:"50%"}}><mark style={{backgroundColor:"white"}}>{color.text}</mark></h2> : <h2 style={{width:"50%"}}><mark style={{backgroundColor:`#B9FF66`}}>{color.text}</mark></h2>}
      {color.color === "black" ? <div style={{display:"flex",alignItems:"center",gap:"10px",color:"white"}}> <ArrowUpRight style={{backgroundColor:"white",color:"black",borderRadius:"20px"}} />learn more</div> : <div style={{display:"flex",alignItems:"center",gap:"10px"}}> <ArrowUpRight style={{backgroundColor:"black",color:"#B9FF66",borderRadius:"20px"}} />learn more</div>}
    </div>
    <img style={{width:"200px"}} src={color.images[0]} alt="" />
    </div>
    
    </div>
    )}
    </div>
    </>
  );
};

export default GrayCard;
