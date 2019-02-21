import React, {  Component } from 'react';
    import './App.css';
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";
import Person from './Person/Person';

class App extends Component {

    state = {
        persons : [ {id: 0, name : "Max"}, {id:1 , name : "Allen"}, {id :2, name : "Chris"} ],
        stateShow : true
    }


    changeStateShow = () => {
        const showState = !this.state.stateShow;
        console.log(showState);
        this.setState({stateShow:showState});
    }

    nameHandler = (event,id) => {
        const found_person = this.state.persons.findIndex(person => person.id === id);

        console.log("found person is ",found_person," and id is ",id);
        const person = {
             ...this.state.persons[found_person]
         };

        person.name = event.target.value;

        const persons = [ ...this.state.persons];

        persons[found_person] = person;
        console.log(persons);
        this.setState(
            { persons:persons }
            );
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
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
                    return <Person
                            name={person.name}
                            click={this.deletePersonHandler.bind(this,index)}
                            change={(event) => this.nameHandler(event,index)}
                            key={person.id}
                        />
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


