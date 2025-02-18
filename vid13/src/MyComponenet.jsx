import React,{useState} from 'react';

function MyComponent(){
    const[food,setFood] = useState(["Apple","Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("FoodInput").value;
        document.getElementById("FoodInput").value ="";

        setFood(f => [...food,newFood])

    }

    function handleRemoveFood(index){
     setFood(food.filter((_,i) => i!==index));
    }

    return(<>
    <div>
        <h2>List of Food</h2>
        <ul>
            {food.map((food,index)=><li key={index} onClick = {()=>handleRemoveFood(index)}>{food} </li>)}
        </ul>
        <input type="text" id="FoodInput" placeholder='enter food name'></input>
        <button onClick={handleAddFood}>Add Food</button>
        

        
        </div></>);

}

export default MyComponent;