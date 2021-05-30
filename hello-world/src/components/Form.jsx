import React, { Fragment, useState } from "react";

export function Form() {
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  const [message, setMessage] = useState(null)

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitData = (event) => {
    event.preventDefault();
    setMessage(<p>Welcome back {data.name} {data.surname}</p>);
  }

  return (
    <Fragment>
      <h2>Form</h2>
      <form onSubmit={onSubmitData}>
        <input
          type="text"
          placeholder="Write your name"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Write your surname"
          name="surname"
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {message}
    </Fragment>
  );
}
