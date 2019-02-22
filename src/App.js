import React, {  Component } from 'react';
import './App.css';
import Radium , { StyleRoot } from 'radium';
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

        let classes = [];

        if(this.state.persons.length <= 2)
            classes.push('red');
        if(this.state.persons.length <= 1)
            classes.push('bold');


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
            style.backgroundColor = 'green';
            style[":hover"] = {
                    backgroundColor: "lightgreen",
                    color:"black"
            }
        }
        return (
            <StyleRoot>
            <div className="App">
                <h1> Hi this is a React App </h1>
                <h2 className={classes.join(" ")}> This is really working </h2>
                <button style={style} onClick={this.changeStateShow}> Toggle Display Persons</button>
                    {person}

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


