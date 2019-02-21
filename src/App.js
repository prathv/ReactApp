import React, {  Component } from 'react';
    import './App.css';
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";
import Person from './Person/Person';
import Validation from './Validation/Validation';
class App extends Component {

    state = {
        persons : [ {id: 0, name : "Max"}, {id:1 , name : "Allen"}, {id :2, name : "Chris"} ],
        stateShow : true,
        userinput : ""

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

    inputTracker = (event) => {
        const newInput = event.target.value;
        this.setState({userinput:newInput});
    };

    render() {
        let person = null;
        let length = 0;

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

                <div>
                    <input type="text" onChange={(event) => this.inputTracker(event)} value={this.state.userinput}/>
                    <p>{this.state.userinput}</p>
                    <Validation length={this.state.userinput.length}/>
                </div>

            </div>
        );
    }
}

export default App;


