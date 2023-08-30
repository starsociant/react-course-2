import PokemonListItem, { PokemonItemProps } from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

export default function PokemonListing({
  pokemons,
}: {
  pokemons: PokemonItemProps[];
}) {
  return (
    <>
      <div className={styles.Container}>
        {!!pokemons.length ? (
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
