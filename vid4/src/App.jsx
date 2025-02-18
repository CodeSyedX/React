
// prop = read omnly propperty that are shared between componenets
// a parent componenet can be send data to a child component
// <component key = value />
import Student from './tudent.jsx'

function App() {
return(
  <><Student name="Spngebob" age={30} isStudent={true}/>
  <Student name="Patrick" age={42} isStudent={false}/>
  <Student name="Squidward" age={50} isStudent={false}/>
  <Student name="sandy"  age={20} isStudent={true}/>
  <Student />
  </>
)

}

export default App
