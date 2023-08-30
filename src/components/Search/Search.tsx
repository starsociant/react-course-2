import styles from "./Search.module.css";

export default function Search({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) {
  return (
    <div className={styles.Search}>
      <input
        type="text"
        name="pokemon-types"
        onChange={(e) => setSearch(e?.target.value)}
      />
    </div>
  );
}
