import styles from "./Filter.module.css";

interface FilterProps {
  items: string[];
  setFilter: (p: string) => void;
  current?: string;
}

export default function Filter({ current, items, setFilter }: FilterProps) {
  const filter = (filter: string) => {
    if (filter === current) {
      setFilter("");
      return;
    }
    setFilter(filter);
  };
  return (
    <div className={styles.Filters}>
      {items.map((type) => {
        const isActive = type === current;
        return (
          <button
            onClick={() => filter(type)}
            className={`${styles.Button} type type--${type} ${
              isActive ? "type--active" : ""
            }`}
            key={`filter-${type}`}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}
