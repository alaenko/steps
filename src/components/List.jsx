import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item';

export default function List(props) {
  const {items, handleRemove} = props;
  const sortedItems = items.sort((a,b) => {  
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;  
  })

  return (
    <ul className="items">
      {sortedItems.map(o => <Item key={o.id} id={o.id} date={o.date} distance={o.distance} handleRemove={handleRemove}/>)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleRemove: PropTypes.func.isRequired
}


