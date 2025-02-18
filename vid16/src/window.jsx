import React,{useState,useEffect} from "react";


function Window(){

    const[width,setWidth] = useState(window.innerWidth)
   const[height,setHeight] = useState(window.innerHeight)

  useEffect(() =>{
    window.addEventListener("resize",handleResize);
    console.log("event listener added");

 return()=>{
    window.removeEventListener("resize",handleResize)
    console.log("event listener removed")// to cleanup the garbage after work
    // to avoid multiple event listener
 }

  },[]);

  useEffect(()=>{
    document.title = `${width} ${height}`
  })


   function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
   }
    return(<>
    
    <p>Window width: {width}px</p>
    <p>Window Height:{height}px</p>
    
    
    </>);
}

export default Window;