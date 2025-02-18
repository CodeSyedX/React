import React,{ useState } from 'react';




function MyComponent(){
const [name,setName] = useState(" guest");
const [age,setAge] = useState(0); 
const[IsEmployed, setIsEmployed] = useState(false);



const updateName = () =>{
   setName("songebob")
}

const incrementAge = () =>{
    setAge(age +1);
}

const toggleEmp = () =>{
    setIsEmployed(!IsEmployed)
}
    return(
   <div>
    <p>Name:{name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age:{age}</p>
    <button onClick={incrementAge}>Increment age</button>
    <p>Is employed:{IsEmployed ? "Yes" : "No"}</p>
    <button onClick={toggleEmp}>check</button>
   </div>
    )

}
export default MyComponent