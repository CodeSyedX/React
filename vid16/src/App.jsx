// useEffect()= react hook that tell react to do some code when(pick one):
//              thhis component re-render
//                this component mount
/////////////////the state of a vlue
//useEffect(function,[dependencies])

//1.useEffect(() =>{})
//run after every re-render
//2.useEffetc(() >={},[])   run only on mount
// 3. useEffect(() =>{},[value])//run on mount+when value changes

// usese
// 1 event listener
// 2 dom manipulation
//3 subscription (real-time update)
// 4 fetching data from api
// clean up when a component unmount

import Window from "./window.jsx"

function App() {
 
  return (
    <>
      <Window/>
    </>
  )
}

export default App
