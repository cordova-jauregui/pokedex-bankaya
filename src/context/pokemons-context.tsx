import React, { useState, useMemo, useEffect, useContext } from "react";
import axios from "axios";
interface iProvider {
  loading: boolean;
  data: iPokemonInList[];
  getPokemon: (id: Number) => Promise<iPokemon>;
}
const baseUrl = "https://pokeapi.co/api/v2/";
const PokemonsContext: any = React.createContext({});
export function PokemonsProvider(props?: any) {
  const [data, setData] = useState<iPokemonInList[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemon = async (id: Number) => {
    try {
      setLoading(true);
      const result = await axios.get(`${baseUrl}pokemon/${id}`);
      setLoading(false);
      return result.data.results;
    } catch (err) {
      alert(`getPokemon ${id}\n${err}`);
    }
  };
  async function getPokemons() {
    const pokemons = data || [];
    try {
      setLoading(true);
      const result = await axios.get(`${baseUrl}pokemon`);
      setLoading(false);
      setData(pokemons.concat(result.data.results));
    } catch (err) {
      alert(`getPokemons\n${err}`);
    }
  }
  const value = useMemo(() => {
    return {
      data,
      loading,
      getPokemon,
    };
  }, [data, loading, getPokemon]);
  return <PokemonsContext.Provider value={value} {...props} />;
}
export function usePokemon(): iProvider {
  const context: iProvider = useContext(PokemonsContext);
  if (!context) {
    throw new Error("'usePokemon' is required");
  }
  return context;
}
