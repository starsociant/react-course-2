import NavItem from "./NavItem";
import styles from "./Header.module.css";
import { NavItemInterface } from "../../interfaces";

interface HeaderProps {
  name?: string;
  navItems: NavItemInterface[];
  login: (p: { name: string }) => string;
}

export default function Header({ name, login, navItems }: HeaderProps) {
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
        {name ? (
          <div className="greeting">Olá {name}</div>
        ) : (
          <button onClick={() => login({ name: "Saulo" })}>Login</button>
        )}
      </div>
    </header>
  );
}
