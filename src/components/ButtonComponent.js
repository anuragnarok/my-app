import React from 'react'

function ButtonComponent(props) {


  return (
    <div> 
        <div>
            <button 
            style={{color:'white',
            backgroundColor:props.col}}>{props.label}</button>
        </div>
    </div>
  )
}

export default ButtonComponent