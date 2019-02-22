import React from 'react';
import Radium from 'radium';
import personcss from './Person.module.css';

const person = (props) => {

    return (
        <div className={personcss.Person}>
            <button onClick={props.click}> Click here to Delete Name </button>
        <p>I'm my name is {props.name} and I am {Math.floor(Math.random() * 30)} years old </p>
            <input type = "text" onChange={props.change} value={props.name}/>
        </div>
            );
};

export default Radium(person);