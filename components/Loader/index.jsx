import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";

const Loader = () => {
  return (
    <div className={styles.bouncingLoader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
