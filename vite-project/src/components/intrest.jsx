import { useState } from "react";

export function CalculateInterest() {

    let [priciple,set] = useState(0);
    let [rate,setrate] = useState(0);
    let [time,settime] = useState(0);
    let [interest,setinterest] = useState(0);

    function setintrestfun(){
        setinterest((priciple*rate*time)/100);

    }
    function setprinciplefun(val){
        set(Number(val))
    }
    function setratefun(val){
        setrate(Number(val))
    }
    function settimefun(val){
        settime(Number(val))
    }


    return(
        <>
        
        <div style={{textAlign:"center" , marginTop:"50px" , border:"2px solid black" , width:"400px" , padding:"20px" , boxShadow:"10px 10px 5px grey" , marginLeft:"550px"}}>

        <input style={{padding:"10px" , fontSize:"18px"}} type="number" name="priciple" id="" placeholder="Enter Principle Amount" onChange={(e)=>setprinciplefun(e.target.value)}/>
        <br />
        <br />
        <input style={{padding:"10px" , fontSize:"18px"}} type="number" name="rate" id="" placeholder="Enter Rate of Interest" onChange={(e)=>setratefun(e.target.value)}/>
        <br />
        <br />
        <input style={{padding:"10px" , fontSize:"18px"}} type="number" name="time" id="" placeholder="Enter Time in Years" onChange={(e)=>settimefun(e.target.value)}/>
        <br />
        <br />
        <button style={{padding:"10px" , fontSize:"18px" , border:"none" , borderRadius:"5px"}} onClick={setintrestfun}>Calculate Interest</button>

        <h1>Simple Interest is : {interest}</h1>
        
        </div>
        
        
        
        </>
    )
}