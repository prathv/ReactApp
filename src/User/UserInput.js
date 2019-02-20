import  React from 'react';
import "../Person/Person.css"

const userinput = (props) => {
    return(
        <div className="Person">
            <h1> User Input Field</h1>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>);
}

export default userinput