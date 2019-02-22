import React from 'react';
import Person from '../Person/Person';


const persons = (props) => (
    <div>
        {
           props.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    click={(event) => props.deletePersonHandler(event,index)}
                    change={(event) => props.nameChangeHandler(event,index)}
                    key={person.id}
                />
            })
        }

    </div>
);


export default persons;