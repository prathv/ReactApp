import React from 'react';
import cockpitClasses from './Cockpit.module.css';

const cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if(props.showPerson){
            console.log(props.showPerson);
            btnClass = cockpitClasses.Red;
    }
    if(props.persons.length <= 2)
        classes.push(cockpitClasses.red);
    if(props.persons.length <= 1)
        classes.push(cockpitClasses.bold);


    return (
        <div className={cockpitClasses.Cockpit}>
            <h1> Hi this is a React App </h1>
            <h2 className={classes.join(' ')}> This is really working </h2>
            <button className={btnClass} onClick={props.changeState}> Toggle Display Persons</button>
        </div>);
};

export default cockpit;