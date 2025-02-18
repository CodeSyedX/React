// useContent() = React Hook that allow you to share value
//                 between multiple levels of components
//                 withut passing props through each level


//Provider Componet
/**
 * 1 import {createContext} from 'react';
 * 2. export const MyContext = createContext();
 * <MyContext.Provider value ={value}>
 * <child/>
 * <MyContext.Provider>
 * 
 * 
 * Consumer component
 * 1. import React,{useContext} frm'react;
 * import{MyContext} from './ComponentA';
 * 2. const value = useContext(MyContext)
 * 
 * 
 * 
 * 
 * 
 */
import ComponentA from "./coma.jsx"





function App() {


  return (
    <>
     <ComponentA/>
  

    </>
  )
}

export default App
