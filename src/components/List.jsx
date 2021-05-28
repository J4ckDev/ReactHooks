import React, { Fragment, useState } from "react";

export function List() {
  const [arrayNumber, setNumber] = useState([1, 2, 3, 4]);

  const onAddNumber = () => {
    console.log("Number added");
    const lastNumber = arrayNumber[arrayNumber.length - 1];
    setNumber([...arrayNumber, ...[lastNumber + 1]]);
  };

  const onRemoveNumber = () => {
    console.log("Number removed");
    const arrayLength = arrayNumber.length === 1 ? 1 : arrayNumber.length - 1;
    setNumber(arrayNumber.slice(0, arrayLength));
  };

  return (
    <Fragment>
      <h2>List</h2>
      <button onClick={onAddNumber}>Add number</button>
      <button onClick={onRemoveNumber}>Remove number</button>
      {arrayNumber.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </Fragment>
  );
}
