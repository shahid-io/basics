import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; 2023 QUILL PEN</p>
        <nav>
          <ul>
            <li>
              <Link to="/" className={styles.links}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.links}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={styles.links}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.links}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
