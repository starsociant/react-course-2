import { Filter } from "../Filter";
import PokemonListing from "../PokemonListing/PokemonListing";
import { Pokemon as PokemonType } from "pokenode-ts";
import { Search } from "../Search";
import styles from "./Content.module.css";
import { useEffect, useState } from "react";
import usePokemons from "../../hooks/usePokemons";

export default function Content() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [filter, setFilter] = useState<string>();
  const [search, setSearch] = useState<string>();
  const { loading, data, loader } = usePokemons();

  useEffect(() => {
    loader();
  }, [loader]);

  useEffect(() => {
    setPokemons(data);
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!filter && !search) {
      setPokemons(data);
      return;
    }
    let filtered = data;
    if (filter) {
      filtered = data.filter(({ types }) =>
        types.map((t) => t.type.name).includes(filter)
      );
    }
    if (search) {
      filtered = filtered.filter(({ name }) => name.includes(search));
    }
    setPokemons(filtered);
  }, [data, filter, search]);

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
      <PokemonListing pokemons={pokemons} loading={loading} />
    </main>
  );
}
