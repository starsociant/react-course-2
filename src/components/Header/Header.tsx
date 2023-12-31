import NavItem from "./NavItem";
import styles from "./Header.module.css";
import { NavItemInterface } from "../../interfaces";

interface HeaderProps {
  name?: string;
  navItems: NavItemInterface[];
}

export default function Header({ name, navItems }: HeaderProps) {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <nav>
          <ul className={`${styles.List}`}>
            {navItems.map((item, i) => (
              <NavItem {...item}></NavItem>
            ))}
          </ul>
        </nav>
        {name ? <div className="greeting">Olá {name}</div> : null}
      </div>
    </header>
  );
}
