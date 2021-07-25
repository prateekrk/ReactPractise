import React from 'react'

const charComponent = (props) =>{
    return(
        <div className='CharComponent' onClick={props.changed}>
            {props.char}
        </div>
    );
}

export default charComponent