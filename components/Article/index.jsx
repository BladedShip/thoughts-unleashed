import React from "react";
import cl from "classnames";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

import styles from "./index.module.scss";

const Article = ({ children, className, backUrl }) => {
  return (
      <article className={cl(className, styles.article)}>
        <Link href={backUrl} className={styles.articleBack}>
          <AiOutlineArrowLeft color='#fcfcfc'/>
        </Link>
        <div className={styles.articleContent}>
        {children}
        </div>
      </article>
  );
};

export default Article;
