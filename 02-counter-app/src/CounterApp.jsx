// Snipet rafcp
// Más eventos disponibles en React en https://es.reactjs.org/docs/events.html

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  // Otra forma de incrementar
  // const handleAdd = () => setCounter( (c) => c + 1 );

  const handleReset = () => setCounter(value);

  const handleSubstract = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button className="button left" onClick={ handleAdd }>+1</button>
      <button className="button middle" onClick={ handleReset }>Reset</button>
      <button className="button right" onClick={ handleSubstract }>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
