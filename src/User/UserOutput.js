import React from 'react';
import "../Person/Person.css";

const userOutput = (props) => {
    return(
    <div className="Person">
        <h1> User output Field</h1>
        <p>Paragraph 1 with username = {props.name} </p>
        <p>Paragraph 2</p>
    </div>);
}

export default userOutput