import "../App.css"

export function B(props){
    console.log(props);
    return(
        <>
        
        <div className="box">
            <div>{props.type=="simple"?"Starter":props.type=="plus"?"Lorem Plus":"Lorem Pro"}</div>
            <div>
                
                <span>✅1 lorem ispum</span>
                <span>✅Lorem ispum, dolor</span>
                <span>✅Monthly Updates</span>
            </div>
            <div>
                {props.type=="simple"?"Free":props.type=="plus"?"$32.00":"$50.00"}
            </div>
            <div>
                <button style={{backgroundColor:props.type=="plus"?"#a428fc":"#e7dfedff",color:props.type=="plus"?"white":"#a428fc",border:"none",padding:"10px",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"}}>
                    Get Started
                </button>
            </div>
        </div>
        
        
        </>
    )
}