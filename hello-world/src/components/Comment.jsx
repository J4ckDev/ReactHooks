import React, { Fragment } from "react";

export function Comment(props) {
  return (
    <Fragment>
      <div>
        <img src={props.person.picture} alt="random avatar" />
        <div>
          <h5>{props.person.name}</h5>
          {props.person.text}.
        </div>
      </div>
    </Fragment>
  );
}