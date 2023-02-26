import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Cover = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1 className={styles.title}>
        Adithyan <br/> Jayakumar
      </h1>
    </div>
  );
};

export default Cover;
