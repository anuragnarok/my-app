import React, { useState } from "react";
import styles from './mystyle.module.css';
function HooksComponent() {
  const [count, setCount] = useState(2);
  const decrement = () => {
    let decCount = count - 1;
    setCount(decCount);
  };
  const increment = () => {
    let incCount = count + 1;
    setCount(incCount);
  };
  
  return (
    <div  id={styles.style}> 
      
      

     
      
        <button 
        id={styles.button1}
        onClick={() => decrement()}>- Decrement</button>
      

      
        <label 
        id="label"
        >count: {count} </label>
      

     
       
        <button 
        id={styles.button2}
        style={{
          textAlign: "right",
        }}
        onClick={() => increment()}>+ Increment</button>
      
      
    </div>
  );
}

export default HooksComponent;
