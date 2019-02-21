import React, {  Component } from 'react';
    import './App.css';
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [ {"name" : "Max"}, {"name" : "Allen"}, {"name" : "Chris"} ],
        stateShow : true
    }


    changeStateShow = () => {
        const showState = !this.state.stateShow;
        console.log(showState);
        this.setState({stateShow:showState});
    }

    nameHandler = (event) => {
        this.setState({ persons : [ {"name" : event.target.value}, {"name" : "Allen"}, {"name" : "Chris"} ] });
    }

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index,1);
        this.setState({persons : persons});
    };


    render() {
        let person = null;

        if(this.state.stateShow){
            person = (
               <div>
                   {
                    this.state.persons.map((person, index) => {
                    return <Person name={person.name} click={this.deletePersonHandler.bind(this,index)}/>
                    })
                   }
               </div>
            );
        }
        return (
            <div className="App">
                <button onClick={this.changeStateShow}> Toggle Display Persons</button>
                    {person}
            </div>
        );
    }
}

export default App;


