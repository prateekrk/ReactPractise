import React from 'react'
import './Person.css'


const person = (props)=>{
    return (
        <div className="Person" >
            <p onClick={props.click}>Hey I'm {props.name} and I am {props.age} years old </p>
            <p>userName : {props.userName}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;