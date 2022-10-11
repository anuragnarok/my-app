import React from 'react'

function ButtonComponent({label,col}) {


  return (
    <div>
        <div>
            <button 
            style={{color:'white',
            backgroundColor:col}}>{label}</button>
        </div>
    </div>
  )
}

export default ButtonComponent