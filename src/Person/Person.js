import React from 'react';

const Person =(props)=>{

    return (
    <div>
    <p onClick={props.click}>I am still here {props.name} {props.children}</p>
    
    <input type="text" onChange={props.chn} />
    </div>
    );
};

export default Person;