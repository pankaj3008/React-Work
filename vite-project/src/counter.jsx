import { useState } from "react";


export function Counter(){
    
    
    let [count, setcount] = useState(0);
    let [num,setnum]= useState(1);
    let [show,setShow]= useState("Hide");
    
    let msg = show == "Hide" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt ab distinctio quibusdam autem doloribus vitae velit molestias. Voluptates eum iste soluta obcaecati labore sint deleniti molestiae accusantium aperiam ratione impedit ducimus excepturi quibusdam est architecto, odit qui minima assumenda cum nulla doloribus enim. Consectetur eveniet quia culpa libero beatae." : "";




    function toggle(){
        if(show=="Show"){
            setShow("Hide")
            
        }else{
            setShow("Show")
            h1
        }
    }

function settdata(val){
    setnum(Number(val))
}



    function increment(){
        setcount(count + num)

    }
    function decrement(){
        setcount(count - num)

    }   

    
    return(

        <>

        <input type="number" name="number" id="number" placeholder="Enter Number" onChange={(e)=> settdata(e.target.value)} />

        <br />
        <br />
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <button disabled={count < 1} onClick={decrement} >Decrement</button>
        
        
        <br />
        <br />

        <p>{msg}</p>
        
        <button onClick={toggle}>{show}</button>

        </>
    )
}



