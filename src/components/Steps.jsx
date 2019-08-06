import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import ItemModel from '../models/ItemModel';
import nanoid from 'nanoid';

export default function Steps() {
  const [state, setState] = useState({
    date: '',
    distance: ''
  });
  const [items, setItems] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();

    setItems(prevItems => {
      for (let item of prevItems) {
        if (item.date === state.date) {
          item.distance = Number(item.distance) + Number(state.distance);
          console.log(item.distance)
          return prevItems;
        }
      }
      return [...prevItems, new ItemModel(nanoid(), state.date, state.distance)];
    });
      setState(prevState => ({ ...prevState, distance: ''}));
    }
  
  const handleChange = evt => {
    const name = evt.target.name,
          value = evt.target.value;
    setState(prevState => ({ ...prevState, [name]: name === 'date' ? new Date(value) : value}));      
  }

  const handleRemove = id => {
    setItems(prevItems => prevItems.filter(o => o.id !== id))
  }
  
  return (
    <React.Fragment>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} distance={state.distance} />
      <ul className="itemsHeaders">
        <li>Дата</li>
        <li>Пройдено (км)</li>
        <li>Действия</li>
     </ul>
      <List items={items} handleRemove={handleRemove} />
    </React.Fragment>
   )
}
