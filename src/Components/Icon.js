import React from 'react'

function Icon(props){
    let myVar = props.className + "-icon";
    return(
        <button className={props.className}>
            <a href={props.href} target='_blank'><img src={props.src} className= {myVar}></img></a>
        </button>
    )
}

export default  Icon