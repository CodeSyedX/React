import PropTypes from'prop-types';

function List(props){
 //const fruit = [ "apple ", "banana " , "kiwi " , "orange"]


/* const fruit =[{id:1,name:"apple" , calories:95},
               {id:2,name:"orange" , calories: 45},
               {id:3,name:"banana" , calories:105},
               {id:4,name:"coconut", calories:159},
               {id:5,name:"pineapple" , calories:37}
 ]*/


 //fruit.sort((a,b)=>a.name.localCompare(b.name)); this is aplhabetic order

 //fruit.sort((a,b)=>b.name.localeCompare(a.name));// this is reverse apphhabetic order

//fruit.sort((a,b) =>a.calories-b.calories);// Numerical order

//fruit.sort((a,b) =>b.calories - a.calories)// reverse numerical order


//const lowCalFruit = fruit.filter(fruits => fruits.calories<100); /// low calories fruits

//const HighhCalFruit = fruit.filter(fruits => fruits.calories>100);// hhigh calories fruits

//const lowList = lowCalFruit.map(lowCalFruits => <li key={lowCalFruits.id}>{lowCalFruits.name}:&nbsp;
                                                                        //    {lowCalFruits.calories}</li>)

const category = props.category;
const itemList = props.items;

const ListItem =itemList.map(item=><li key={item.id}>{item.name}:&nbsp;<b>{item.calories}</b></li>)
//   const ListItem = fruit.map(fruits => <li key={fruits.id}>
                                      //   {fruits.name}: &nbsp;
                                       //  <b>{fruits.calories}</b></li>)
 return (
    
  
   <> <h3 className="list-category">{category}</h3><ol className="ol-list">{ListItem}</ol></>
 )
 
}
List.propTypes = {
  category: PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name:PropTypes.string , calories: PropTypes.number }))

}
List.defaultProps = {
  category:"category",
  items: [],
}

export default List 