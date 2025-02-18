import React,{useState,useEffect} from 'react'



function Digtal(){

const[time,setTime] = useState(new Date());
useEffect(()=>{
   const intervalId = setInterval(()=>{
    setTime(new Date());
   },1000)

   return()=>{
    clearInterval(intervalId)
   }
},[]);

function formatTime(){
    let hours = time.getHours();
    let  minutes=time.getMinutes();
    let second = time.getSeconds();
    const meridiam = hours>=12 ?"pm" :"am"

    hours = hours %12 || 12;
  return `${padZero(hours)}: ${padZero(minutes)}: ${padZero(second)} ${meridiam}`;
}


function padZero(number){
    if(number<10){
        return ("0")+number
    }
    else{
       return ("")+number
    }

}


    return(<div className='clock-container'>
        <div className='clock'>

            <span>{formatTime()}</span>
        </div>




    </div>)
}

export default Digtal;