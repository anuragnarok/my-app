import React, { useState } from 'react'

function HooksComponent() {
    const [count , setCount] = useState(2)
    const decrement = () => {
        let decCount = count - 1;
        setCount(decCount)
    }
    const increment = () => {
        let incCount = count + 1;
        setCount(incCount)
    }
  return (
    <div 
    >



        <div
         style = {{
            textAlign: 'left'
        }}>

        <button 
        onClick={()=> decrement()}
       >- Decrement</button>

        </div>

        <div
        style={{
            textAlign : 'center'
        }}>

        <label 
        >count: {count} </label>

        </div>

        <div
         style= {{
            textAlign:'right' 
        }}>

        <button 
        onClick={()=> increment()}>+ Increment</button>

        </div>
       
        
        
    </div>
  )
}

export default HooksComponent