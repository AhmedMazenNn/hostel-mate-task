import React from 'react'
import {ArrowUpRight} from 'lucide-react'


const GreenCard = () => {
  return (
    <>
    <div style={{display:"flex",backgroundColor:"#B9FF66",border:"1px solid black",borderRadius:"10px",width:"20%",padding:"20px"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"50px"}}>
      <h2 ><mark style={{backgroundColor:"white"}}> Search engine optimization</mark></h2>
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}> <ArrowUpRight style={{backgroundColor:"black",color:"#B9FF66",borderRadius:"20px"}} />learn more</div>
    </div>
    <img src="../../public/cards/tokyo-selecting-a-value-in-the-browser-window 1.png" alt="" />
    </div>
    </>
  )
}

export default GreenCard
