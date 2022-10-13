import React from 'react'
import styles from './mystyle.module.css'

const BlueButtonComponent = () => {


  return (
    <div> 
        <div>
            <label id={styles.firstlabel}>label</label>
            <button 
            id= {styles.blueButton}
            style= {{color:"white",
                backgroundColor:"blue"}}>
                Click Me Button
            </button>
        </div>

    </div>
    
    
  )
}

export default BlueButtonComponent