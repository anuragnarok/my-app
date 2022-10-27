import React from "react";
import styles from "./mystyle.module.css";

const BlueButtonComponent = () => {
  return (
    <div>
      <label id={styles.firstlabel}>label</label>

      <button
        id={styles.blueButton}
        style={{ color: "white", backgroundColor: "blue" }}
      >
        Click Me Button
      </button>
    </div>
  );
};

export default BlueButtonComponent;
