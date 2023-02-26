import React from "react";
import cl from "classnames";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillBulb,
} from "react-icons/ai";

import styles from "./index.module.scss";
import { ScreenEgg } from "..";

const socials = [
  {
    id: 1,
    href: "https://www.behance.net/adithyajayakum",
    icon: AiFillBehanceCircle,
  },
  {
    id: 2,
    href: "https://github.com/BladedShip",
    icon: AiFillGithub,
  },
  {
    id: 3,
    href: "https://www.instagram.com/adithyan.co/",
    icon: AiFillInstagram,
  },
  {
    id: 4,
    href: "https://www.linkedin.com/in/adijay/",
    icon: AiFillLinkedin,
  },
  {
    id: 5,
    href: "https://www.adithyan.tech/",
    icon: AiFillBulb,
  },
];

const Socials = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {socials.map((social) => (
          <li key={social.id} className={styles.listItem}>
            <a
              href={social.href}
              target="_blank"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(social.icon, {
                color: "#fff",
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default Socials;
