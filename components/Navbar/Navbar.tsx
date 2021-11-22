import React, { FC } from "react";
import Link from "next/Link";
import styles from "../../styles/Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { MenuItems } from "./MenuItems";

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <FaHome size="2em" className={styles["nav-links"]}>
            Bean
          </FaHome>
        </Link>
      </div>

      <div>
        {MenuItems.map(({ url, cName, title }, index) => {
          return (
            <Link href={url} key={index}>
              <a className={styles[cName]}>{title}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
