import React from "react";
import styles from ".././styles/style.module.scss";
function Domain({ prefix, suffix, domainName }) {
  return (
    <div>
      <span className={styles.select}>{prefix}</span>
      <input
        className={styles.input}
        type="text"
        placeholder="mySite"
        value={domainName}
      />
      <span className={styles.select}>{suffix}</span>
    </div>
  );
}

export default Domain;
