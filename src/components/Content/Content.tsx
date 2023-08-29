import { Filter } from "../Filter";
import PokemonListing from "../PokemonListing/PokemonListing";
import { Search } from "../Search";
import styles from "./Content.module.css";

export default function Content() {
  const items = [
    "bug",
    "electric",
    "fire",
    "flying",
    "grass",
    "poison",
    "water",
    "normal",
  ];

  return (
    <main>
      <h1 className={styles.H1}>Pokedex</h1>
      <Filter items={items} />
      <Search />
      <PokemonListing />
    </main>
  );
}
