import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class MenuList extends Component {

  onHandleAddToBasket = (item) => {
    console.log('hello');
    
    //axios.post('http://localhost:3001/dishes/addItem', {data: item})
    //  .then(res => console.log(res))
  }

  render() {
    const {items} = this.props
    console.log('items',items);
    return (
      <ul>
        {
          items && items.map(item => (
              <li>
                {item.name} - {item.price}
                <button onClick={() => this.onHandleAddToBasket(item)}>Add</button>
              </li>
          ))
        }
      </ul>
    );
  }
}

export default MenuList;
