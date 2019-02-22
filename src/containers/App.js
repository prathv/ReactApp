import React, {  Component } from 'react';
import cssClasses from './App.module.css';
import Radium , { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Validation from '../Validation/Validation';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    state = {
        persons : [ {id: 0, name : "Max"}, {id:1 , name : "Allen"}, {id :2, name : "Chris"} ],
        stateShow : false,
        userinput : ""

    }

    changeStateShow = () => {
        const showState = !this.state.stateShow;
        this.setState({stateShow:showState});
    }

    nameHandler = (event,id) => {
        const found_person = this.state.persons.findIndex(person => person.id === id);

        const person = {
             ...this.state.persons[found_person]
         };

        person.name = event.target.value;

        const persons = [ ...this.state.persons];

        persons[found_person] = person;
        this.setState(
            { persons:persons }
            );
    }

    deletePersonHandler = (event,index) => {
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons : persons});
    };

    inputTracker = (event) => {
        const newInput = event.target.value;
        this.setState({userinput:newInput});
    };

    render() {
        let persons = null;
        let classes = [];
        let cockpit = null;
        let btnClass = '';


        const style =  {
            backgroundColor: 'red',
            color:"white",
            font:"inherit",
            border:"1px solid blue",
            padding:"8px",
            cursor:"pointer",
            ":hover": {
                backgroundColor: "white",
                color:"black"
            }
        }

        cockpit = (<Cockpit btnClass={btnClass} persons={this.state.persons}  changeState={this.changeStateShow} showPersons={this.state.stateShow}/>);

        if(this.state.stateShow){

            persons = (<Persons
                persons = {this.state.persons}
                deletePersonHandler = {this.deletePersonHandler}
                nameChangeHandler={this.nameHandler}
            />);

            style.backgroundColor = 'green';
            style[":hover"] = {
                backgroundColor: "lightgreen",
                color: "black"

            }
        }
        return (
            <StyleRoot>
            <div className={cssClasses.App}>
                {cockpit}
                {persons}
                <div>
                    <input type="text" onChange={(event) => this.inputTracker(event)} value={this.state.userinput}/>
                    <p>{this.state.userinput}</p>
                    <Validation length={this.state.userinput.length}/>
                </div>
            </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);


