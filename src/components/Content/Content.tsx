import { Filter } from "../Filter";
import PokemonListing from "../PokemonListing/PokemonListing";
import { Search } from "../Search";
import styles from "./Content.module.css";
import data from "../../pokemons.json";
import { useEffect, useState } from "react";
import { PokemonItemProps } from "../PokemonListing/PokemonListItem";

export default function Content() {
  const [pokemons, setPokemons] = useState<PokemonItemProps[]>(data);
  const [filter, setFilter] = useState<string>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    if (!filter && !search) {
      setPokemons(data);
      return;
    }

    let filtered = data;
    if (filter) {
      filtered = data.filter(({ types }) => types.includes(filter));
    }

    if (search) {
      filtered = filtered.filter(({ name }) => name.includes(search));
    }
    setPokemons(filtered);
  }, [filter, search]);

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
      <Filter current={filter} items={items} setFilter={setFilter} />
      <Search setSearch={setSearch} />
      <PokemonListing pokemons={pokemons} />
    </main>
  );
}
