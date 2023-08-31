import styles from "./PokemonsListing.module.css";
import StarIcon from "../../assets/icons/star.png";
import StarFilledIcon from "../../assets/icons/filled-star.png";
import { Pokemon as PokemonType } from "pokenode-ts";

export interface PokemonItemProps extends PokemonType {
  isFav?: boolean;
}

export default function PokemonListItem({
  name,
  sprites,
  types,
  isFav = false,
}: PokemonItemProps) {
  const [primaryType] = types;
  return (
    <div className={`${styles.ContainerItem} type type--${primaryType.type.name}`}>
      <div className={styles.Canvas}>
        <h4 className={styles.H4}>{name}</h4>
        <ul className={styles.TypesList}>
          {types.map(({ type }, idx) => (
            <li className={`type type--${type.name}`} key={idx}>
              {type.name}
            </li>
          ))}
        </ul>
        <button className={styles.FavButton}>
          <img src={isFav ? StarFilledIcon : StarIcon} alt="Fav Icon" />
        </button>
        <img
          className={styles.PokemonAvatar}
          src={sprites.other?.["official-artwork"].front_default!}
          alt={name}
        />
      </div>
    </div>
  );
}
