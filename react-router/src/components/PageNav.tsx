import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import styles from "./PageNav.module.css";
import { Path } from "../constants";

export function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to={Path.Pricing}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={Path.Product}>Product</NavLink>
        </li>
        <li>
          <NavLink to={Path.Login} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
