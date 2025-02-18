import React,{useState,useEffect} from "react";

function Mycomponent(){

const[count,setCount] = useState(0);
const[color,setColor]= useState("green")


//useEffect(()=>{
//    document.title = `Count: ${count}`
//})

useEffect(()=>{
    document.title =`c${count} ${color}`;
},[count,color])




function addCount(){
    setCount(c=>c+1);
}

function subCount(){
    setCount(c=>c-1);
}
function handleColor(){
    setColor(c => c==="green" ? "red" :"green")
    return()=>{
        //some cleanup code
    }
}




    return(<>
    <p stye ={{color:color}}>Count:{count}</p>
    <button  onClick={addCount}>Add</button>
    <button onClick={subCount}>SUb</button><br/>
    <button onClick={handleColor}>Change color</button>
    
    
    
    </>)


}

export default Mycomponent;