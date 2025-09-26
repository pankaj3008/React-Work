import { useState } from "react";


export function Btn(){
    let [color,setcolor] = useState("green");

    const changeColor = ()=>{
        if(color === "green"){
            setcolor("yellow")
        }else{
            setcolor("green")
        }
    }

    return(
        <>
        {/* <body style={{backgroundColor:color}}> */}
            
        <button style={{backgroundColor: color, width: "150px", height: "50px" , borderRadius:"300px"}} onClick={changeColor}>
        Color: {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>

        <h1>Currunt Color is : {color.charAt(0).toUpperCase() + color.slice(1)}</h1>
        {/* </body> */}
        </>
    )
}