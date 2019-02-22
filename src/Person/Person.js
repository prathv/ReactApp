import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
            '@media (mid-width: 500px)': {
                width:'450px'
            }
    };

    return (
        <div className="Person" style={style}>
            <button onClick={props.click}> Click here to Delete Name </button>
        <p>I'm my name is {props.name} and I am {Math.floor(Math.random() * 30)} years old </p>
            <input type = "text" onChange={props.change} value={props.name}/>
        </div>
            );
};

export default Radium(person);