
import './App.css';

const products = [ //Array
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
  { title: 'Carrots', isFruit: true, id: 4 },
  { title: 'kales', isFruit: false, id: 5 },
];
export default function ShoppingList() { //main component
  const listItems = products.map(product => // products - a constant array. (.map) iterates over each item in the array and applie a function
    <li //creates a list item element
    key ={product.id} //assigns a unique key to each list item
    style={{ // style attribute
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    // {product.title} - accesses the title property for the current product object
    // {listItems} - inserts the item array which nowcontains the jsx element for each list item
    >
      {product.title} 
      </li>
      );

      return ( // returns jsx code that displays the list
        <ul>{listItems}</ul>
      );
}
