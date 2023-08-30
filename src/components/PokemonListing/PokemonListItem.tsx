import styles from "./PokemonsListing.module.css";
import StarIcon from "../../assets/icons/star.png";
import StarFilledIcon from "../../assets/icons/filled-star.png";

export interface PokemonItemProps {
  number: number;
  image: string;
  name: string;
  types: string[];
  isFav?: boolean;
}

export default function PokemonListItem({
  name,
  image,
  types,
  isFav = false,
}: PokemonItemProps) {
  const [primaryType] = types;
  return (
    <div className={`${styles.ContainerItem} type type--${primaryType}`}>
      <div className={styles.Canvas}>
        <h4 className={styles.H4}>{name}</h4>
        <ul className={styles.TypesList}>
          {types.map((type, idx) => (
            <li className={`type type--${type}`} key={idx}>
              {type}
            </li>
          ))}
        </ul>
        <button className={styles.FavButton}>
          <img src={isFav ? StarFilledIcon : StarIcon} alt="Fav Icon" />
        </button>
        <img className={styles.PokemonAvatar} src={image} alt={name} />
      </div>
    </div>
  );
}
