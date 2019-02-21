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
        return (
            <div className="App">
                <button onClick={this.changeStateShow}> Toggle Display Persons</button>
                {
                    this.state.stateShow === true ?
                        <div>
                    <Person />
                        </div>:null
                }
            </div>
        );
    }
}

export default App;


