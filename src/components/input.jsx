import React from "react";
import styles from ".././styles/style.module.scss";
function Input({
  prefixs = [],
  suffixs = [],
  domainName,
  onPrefixChange,
  onSuffixChange,
  handleInputChange,
}) {
  return (
    <div>
      <select className={styles.select} onChange={onPrefixChange}>
        {prefixs.map((prefix) => (
          <option key={prefix} value={prefix}>
            {prefix}
          </option>
        ))}
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="mySite"
        value={domainName}
        onChange={handleInputChange}
      />
      <select className={styles.select} onChange={onSuffixChange}>
        {suffixs.map((suffix) => (
          <option key={suffix} value={suffix}>
            {suffix}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Input;
