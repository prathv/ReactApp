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



    render() {
        let person = null;

        if(this.state.stateShow){
            person = (<Person/>);
        }
        return (
            <div className="App">
                <button onClick={this.changeStateShow}> Toggle Display Persons</button>
                {
                        <div>
                            {person}
                        </div>

                }
            </div>
        );
    }
}

export default App;


