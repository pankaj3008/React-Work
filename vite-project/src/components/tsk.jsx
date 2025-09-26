import { useState } from "react"
import { Taskdata } from "../assets/taskdata"

export function Task(){
let [task, settask] = useState({title:"",priority:"" , status:false})
let [datapush, setdatapush]= useState(true)
let [filtereddata, setfilytereddata]=useState([])
let [status,setsatus]=useState(false)

function chnagestate(idx){
  
let task1= Taskdata.find((v,i)=>{
return i==idx
})

task1.status= true
setsatus(!status)
console.log(task1)
}
function deletdata(idx){
  
Taskdata.splice(idx,1)

setdatapush(!datapush);

}


function handlesubmit(e){


e.preventDefault()


Taskdata.push(task)
console.log(Taskdata)

setdatapush(!datapush)

}

function handlechange(e){
let {name, value}=e.target
settask({...task, [name]:value})
}


function filterdata(value){
 let data =   Taskdata.filter((v)=> v.title.includes(value))

 setfilytereddata([...data])

}



return (

<>

<h1 style={ {textAlign:"center"}}>This is task war</h1>

<div  style={{textAlign:"center"}}>

    <input type="text"   placeholder="seach task name"  onChange={(e)=> filterdata(e.target.value)}/>

    </div>





<div>


<form onSubmit={handlesubmit} >

<input type="text" name="title" id="title" style={{margin:"2px 20px"}} placeholder="enter task name" onChange={handlechange}/>

<select name="priority" id="" onChange={handlechange} >
<option value="high">high</option>
<option value="low">low</option>
<option value="medium">Medium</option>
</select>

<input type="submit" value="Submit"  style={{display:"block", margin:"10px"}} />
</form>


</div>


{/* //new div */}

<div>
{filtereddata.length>0 ? filtereddata.map((value, idx)=>{
return (

<div key={idx} style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}>
<h3>{value.title}</h3>
<p>{value.priority}</p>
<button onClick={()=>chnagestate(idx)} >{value.status?"completed":"pending"}</button>
</div>

)
}) : Taskdata.map((value, idx)=>{
return (

<div key={idx} style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}>
<h3>{value.title}</h3>
<p>{value.priority}</p>
<button onClick={()=>chnagestate(idx)} >{value.status?"completed":"pending"}</button>
<button onClick={()=>deletdata(idx)} >delete</button>
</div>

)
}) }
</div>

</>

)

}