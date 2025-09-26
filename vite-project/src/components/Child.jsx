export function  Child(props){
    let {data} = props;
    
    return(
        <div style={{textAlign:"center"}}>
            <h1>This is Form</h1>
            <form >
                <input style={{margin:"10px"}} type="text" name="name" id="name" onChange={(e)=>{console.log(e.target.value)}}/><br />
                <input type="email" name="email" id="email"/><br />
                <input type="text" name="number" id="number" /><br />
                <input type="text" name="password" id="password"/><br />
            </form>
        

        </div>
    )
}