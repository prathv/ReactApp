import React from 'react';
import './Person.css';

const person = (props) => {


    return (
        <div className="Person">
            <button onClick={props.click}> Click here to Delete Name </button>
        <p>I'm my name is {props.name} and I am {Math.floor(Math.random() * 30)} years old </p>
            <input type = "text" onChange={props.change} value={props.name}></input>
        </div>
            );
};

export default person;