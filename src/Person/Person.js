import React from 'react';

const person = (props) => {


    return (
        <div>
        <p>I'm my name is {props.name} and I am {Math.floor(Math.random() * 30)} years old </p>
        </div>
            );
};

export default person;