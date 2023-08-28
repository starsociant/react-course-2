import NavItem, { NavItemProps } from "./NavItem";

interface HeaderProps {
  name?: string;
  navItems: NavItemProps[];
}

export default function Header({ name, navItems }: HeaderProps) {
  return (
    <>
      <div>Hello Bar</div>
      <header>
        <div className="container">
          <nav>
            <ul>
              {navItems.map((item) => (
                // <NavItem label={item.label} url={item.url}></NavItem>
                <NavItem {...item}></NavItem>
              ))}
            </ul>
          </nav>
          {name ? <div className="greeting-0">Olá {name}</div> : null}
        </div>
      </header>
    </>
  );
}
