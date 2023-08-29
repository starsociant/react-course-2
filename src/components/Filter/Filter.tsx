import styles from "./Filter.module.css";

export default function Filter({ items }: { items: string[] }) {
  return (
    <div className={styles.Filters}>
      {items.map((type) => (
        <button
          className={`${styles.Button} type type--${type}`}
          key={`filter-${type}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
