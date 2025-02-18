import List from './list.jsx'

function App() {
  // we can use && operator  instead of  ? null to verify // known as short circuiting
  
 const fruit =[{id:1,name:"apple" , calories:95},
               {id:2,name:"orange" , calories: 45},
               {id:3,name:"banana" , calories:105},
               {id:4,name:"coconut", calories:159},
               {id:5,name:"pineapple" , calories:37}
]

const vegetable  =[{id:6,name:"potato" , calories:195},
                   {id:7,name:"celery" , calories:75},
                   {id:8,name:"carrot" , calories:115},
                   {id:9,name:"corn", calories:19},                 
                   {id:10,name:"brocooli" , calories:67}
]
  
  return <>
         {fruit.length > 0 ? <List items = {fruit}  category="Fruits"/>:null}
         {vegetable.length >0 ? <List items = {vegetable}  category="vegetable"/>:null}</>
}

export default App
