import React, { useState, Component } from 'react';
    import './App.css';
import Person from "./Person/Person";

const app = props => {

  const [personState, setPersonsState] = useState({
        persons : [ {"name" : "Max"}, {"name" : "Allen"}, {"name" : "Chris"} ]
    });


    const switchHandler = () => {
        setPersonsState({ persons : [ {"name" : "Maxmillian"}, {"name" : "Allen"}, {"name" : "Chris"} ] });
    }


    return (
      <div className="App">
          <h1> Hi i'm a react app</h1>
          <button onClick={switchHandler}>Switch Name</button>
            <Person name={personState.persons[0].name}/>
      </div>
    );
}

export default app;


// state = {
//     persons : [ {"name" : "Max"}, {"name" : "Allen"}, {"name" : "Chris"} ]
// }
//
// currentPerson = this.state.persons[0];
// switchNameHandler = () => {
//     console.log("clicked!");
//     this.setState({ persons : [ {"name" : "Maxmillian"}, {"name" : "Allen"}, {"name" : "Chris"} ] });
// }