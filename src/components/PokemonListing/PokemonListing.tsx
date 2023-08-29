import PokemonListItem from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";
import pokemons from "../../pokemons.json";

export default function PokemonListing() {
  return (
    <div className={styles.Container}>
      {pokemons.map((pokemon, i) => {
        const isFav = Math.random() < 0.5;
        return (
          <PokemonListItem
            {...pokemon}
            key={`pokemonslist-item-${i}`}
            isFav={isFav}
          />
        );
      })}
    </div>
  );
}
