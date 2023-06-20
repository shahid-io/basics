import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h4 className={styles.heading}>Menu</h4>
      <hr></hr>
      <ul className={styles.sidebarItems}>
        <Link to="/" className={styles.links}>
          Home
        </Link>
        <Link to="/about" className={styles.links}>
          About us
        </Link>
        <Link to="career" className={styles.links}>
          Career
        </Link>
        <Link to="/contact" className={styles.links}>
          Contact
        </Link>
      </ul>

    </div>
  );
};

export default Sidebar;
