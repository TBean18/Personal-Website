import Link from "next/Link";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/Layout.module.css";

const Footer: FC = () => {
  return (
    <div>
      <div className={styles.socialIcons}>
        <Link href="https://github.com/TBean18">
          <FaGithub size="2em" className={styles.socialIconLink} />
        </Link>
      </div>
      {/* <h3> Icons and Stuff go here</h3> */}
    </div>
  );
};

export default Footer;
