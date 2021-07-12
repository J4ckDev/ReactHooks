import React, { Fragment } from "react";
import { Comment } from './Comment'

export function Comments(props) {      
    const people = props.people.map((person,key) => <Comment key={key} person={person}/>);
  return (
    <Fragment>      
      <h2>Comments</h2>     
      <hr /> 
      {people}
      <hr />
    </Fragment>
  );
}
