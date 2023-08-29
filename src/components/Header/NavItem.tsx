import styles from "./Header.module.css";

export interface NavItemProps {
  label: string;
  url: string;
}

export default function NavItem({ url, label }: NavItemProps) {
  return (
    <li>
      <a className={styles.ListItem} href={url}>
        {label}
      </a>
    </li>
  );
}
