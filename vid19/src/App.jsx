//useState() = Re-render the component when the statr value changes
/**
 * 
 * useRef() =="use Reference" dors not cause re-render ehen its value changes.
 *         when you want a component to "remember" some information
,
but you dont want that information to trigger new render 
 * 
 * 
 * 
 * 
 * 1. accessing/interacting with DOM element
 * 2. Hnanling Focus ,animation and transition
 * 3. managing timers and interval
 * 
 * 
 */
import MyComponent from "mycom.jsx"

 function App() {


  return (
    <><MyComponent/>
    
    </>
  )
}

export default App
