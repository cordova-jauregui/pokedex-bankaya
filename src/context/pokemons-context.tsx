import React, { useState, useMemo, useEffect, useContext } from "react";
import axios from "axios";
interface iProvider {
  loading: boolean;
  data: iPokemon[];
}
interface iPokemon {
  name: boolean;
  url: string;
}
const PokemonsContext = React.createContext<iProvider>({
  loading: true,
  data: [],
});
export function PokemonsProvider(props?: any) {
  const [data, setData] = useState<iPokemon[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPokemon();
  }, []);
  async function getPokemon(id?: Number) {
    const pokemons = data || [];
    try {
      setLoading(true);
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setLoading(false);
      setData(pokemons.concat(result.data.results));
    } catch (err) {
      alert(`getPokemon\n${err}`);
    }
  }
  const value = useMemo(() => {
    return {
      data,
      loading,
    };
  }, [data, loading]);
  return <PokemonsContext.Provider value={value} {...props} />;
}
export function usePokemon() {
  const context = useContext(PokemonsContext);
  if (!context) {
    throw new Error("'usePokemon' is required");
  }
  return context;
}
