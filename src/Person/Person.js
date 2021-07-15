import React from 'react'

const person = (props)=>{
    return (
        <div>
            <p onClick={props.click}>Hey I'm {props.name} and I am {props.year} years old </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;