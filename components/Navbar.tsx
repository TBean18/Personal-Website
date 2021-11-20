import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/Link";
import styles from "../styles/Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <a className={styles.a}>Bean</a>
        </Link>
      </div>

      <div>
        <Link href="/">
          <a className={styles.a}>Home</a>
        </Link>
        <Link href="/Projects">
          <a className={styles.a}>Projects</a>
        </Link>
        <Link href="/about">
          <a className={styles.a}>About</a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
