import React, {useState} from 'react'

function Counter(){

 const[count,setCount] = useState(0);

 const increment= () =>{
setCount(count+1);
 }

 const decreament = () =>{
    setCount(count -1);

 }

 const reset = () =>{
setCount(0);
 }
return (
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="but" onClick ={decreament}>decreament</button>
        <button className="but" onClick ={increment}>increament</button>
        <button className="but" onClick ={reset}>reset</button>
    </div>
)
}

export default Counter