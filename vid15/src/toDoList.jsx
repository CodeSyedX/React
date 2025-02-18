import React,{useState} from 'react'

function ToDoList(){
const [task,setTask] = useState(['eat breakfast','take a shower',"walk the dog"]);
const[newtask,setNewTask] =useState("");

function handleInputChange(event){
setNewTask(event.target.value);
}

function addTask(){
    if(newtask.trim() !==""){
   setTask(t => [...t,newtask])
   setNewTask("");}
}

function deleteTask(index){
    const updatedTask = task.filter((_,i) => i!==index);
    setTask(updatedTask);


}

function moveTaskUp(index){
    if(index>0){
        const updatedTask = [...task];
        [updatedTask[index],updatedTask[index-1]]
          =[updatedTask[index-1], updatedTask[index]]
          setTask(updatedTask);


    }

}

function moveTaskDown(index){
   if(index<task.length-1){
    const updatedTask = [...task];
    [updatedTask[index],updatedTask[index+1]]
     = [updatedTask[index+1],updatedTask[index]]
     setTask(updatedTask)
   }
}
return(<div className='to-do-list'>
<h1>To-Do-List</h1>
<div>
    <input type="text" placeholder='enter the task' value={newtask} onChange={handleInputChange}/>
    <button className='add-but' onClick={addTask}>Add</button>
</div>
<ol>
    {task.map((task,index)=><li key={index}>
        <span className='text'>{task}</span>
        <button className='del-but' onClick={()=>deleteTask(index)}>Delete</button>
        <button className='up-but' onClick={()=>moveTaskUp(index)}>MoveUp</button>
        <button className='del-but' onClick={()=>moveTaskDown(index)}>moveTaskDown</button>
    </li>)}
</ol>
</div>)

}

export default ToDoList