import React from 'react';
import PropTypes from 'prop-types';

export default function Form (props) {
  const {handleChange, handleSubmit, distance} = props;

  return (
      <form onSubmit={handleSubmit}>
        <label>Дата (ДД.ММ.ГГ)
          <input id="date" type="date" name="date" onChange={handleChange} required></input>
        </label>
        <label>Пройдено км
           <input id="distance" type="text" name="distance" value={distance} onChange={handleChange} required></input>
        </label>
        <button className="ok" type="submit">OK</button>
      </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  distance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}