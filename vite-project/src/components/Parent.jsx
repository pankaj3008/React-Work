import {useState} from "react";
import {Child} from "./Child.jsx";
export function Parent(){
    let [data,setdata] = useState(0);

    return(
        <>
        
        {/* <h1>This is Parent Component</h1> */}
        <Child data={data}/>

        </>
    )
}