import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navBar}>
        <img
          alt="logo"
          src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?size=626&ext=jpg&ga=GA1.2.325919131.1687260393&semt=sph"
          className={styles.logo}
        ></img>
        <ul className={styles.navItems}>
          <li>
            <Link to="/home" className={styles.links}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.links}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/career" className={styles.links}>
              Career
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
  );
};

export default Header;
