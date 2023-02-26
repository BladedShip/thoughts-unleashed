import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Button = ({ children, className, onClick, disabled }) => {
  return (
      <button className={cl(className, styles.button)} onClick={onClick} disabled={disabled}>
        {children}
      </button>
  );
};

export default Button;
