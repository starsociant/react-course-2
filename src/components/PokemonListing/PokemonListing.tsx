import PokemonListItem, { PokemonItemProps } from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

export default function PokemonListing({
  pokemons,
  loading = true,
}: {
  pokemons: PokemonItemProps[];
  loading: boolean;
}) {
  return (
    <>
      <div className={styles.Container}>
        {loading ? (
          <h4 className={styles.NoData}>Loading...</h4>
        ) : !!pokemons.length ? (
          pokemons.map((pokemon, i) => {
            return (
              <PokemonListItem {...pokemon} key={`pokemonslist-item-${i}`} />
            );
          })
        ) : (
          <h4 className={styles.NoData}>No data to display</h4>
        )}
      </div>
    </>
  );
}
