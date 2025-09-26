import "../App.css"
import {B} from "./B.jsx";


export function A(){


    return (

        <>

<div className="container">

        <div className="head">
            <div className="head1 ">
                <h1>The Right Plan for</h1>
                <h1 className="purple">Your Business</h1>
            </div>
            <div className="head2">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eligendi earum qui excepturi in hic iure facilis rem.</p>
            </div>
        </div>
</div>
<div>
        <B type={"simple"}/>
        <B type={"plus"}/>
        <B type={"pro"}/>
</div>
        </>

    )
}