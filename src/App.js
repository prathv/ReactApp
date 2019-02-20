import React, { useState, Component } from 'react';
    import './App.css';
import Person from "./Person/Person";
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";


class App extends Component {

    state = {
        persons : [ {"name" : "Max"}, {"name" : "Allen"}, {"name" : "Chris"} ]
    }

    switchNameHandler = (name) => {
        this.setState({ persons : [ {"name" : name}, {"name" : "Allen"}, {"name" : "Chris"} ] });
    }

    nameHandler = (event) => {
        this.setState({ persons : [ {"name" : event.target.value}, {"name" : "Allen"}, {"name" : "Chris"} ] });
    }

    render() {
        return (
            <div className="App">
                <UserInput change={this.nameHandler} name={this.state.persons[0].name}/>
                <UserOutput name={this.state.persons[0].name}/>
            </div>
        );
    }
}

export default App;


