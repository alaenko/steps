import React from 'react';
import PropTypes from 'prop-types';

export default function Item(props) {
  const {id, date, distance, handleRemove} = props;
  const dateForRender = () => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
          month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth(),
          year = date.getFullYear();

    return day + '.' + month + '.' + year;
  }

  return (
    <li>
       <div>{dateForRender()}</div>
       <div>{distance}</div>
       <div>
          <i onClick={() => handleRemove(id)}>✘</i>
       </div>
    </li>
  )
}

Item.propTypes = {
  distance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  date: PropTypes.instanceOf(Date)
}


