import { Pokemon as PokemonType, PokemonClient } from "pokenode-ts";
import { useCallback, useState } from "react";

export default function usePokemons() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PokemonType[]>([]);

  const loader = useCallback(async () => {
    setLoading(true);
    const api = new PokemonClient();
    const list = await api.listPokemons();
    Promise.all(
      list.results.map(async (p) => api.getPokemonByName(p.name))
    ).then((pokemons) => {
      setLoading(false);
      setData(pokemons);
    });
  }, []);

  return { loading, data, loader };
}
