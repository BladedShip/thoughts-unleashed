import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Cover = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1 className={styles.title}>
        Thoughts <br/> Unleashed
      </h1>
      <p>By Adithyan Jayakumar</p>
    </div>
  );
};

export default Cover;
