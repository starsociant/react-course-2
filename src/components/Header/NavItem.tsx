export interface NavItemProps {
  label: string;
  url: string;
}

export default function NavItem({ url, label }: NavItemProps) {
  return (
    <li>
      <a href={url}>{label}</a>
    </li>
  );
}
