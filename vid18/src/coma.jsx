
import { useState,createContext } from "react";
import ComponentB from "./comb.jsx"

export const UserContext = createContext();

function ComponentA(){

    const[user,setUser]=useState("bro Code")
  return(
    <div className="box">
        <h2>Component-A</h2>
  <h3>{`Hello ${ user}`}</h3>
  <UserContext.Provider value = {user}>

  <ComponentB user={user}/>
  </UserContext.Provider>
      

    </div>
  )
}

export default ComponentA;