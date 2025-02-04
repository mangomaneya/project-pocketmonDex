import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";
import supabase from "../../supabaseClient";

const Dex = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("POKEMON_MOCKDATA")
        .select("*");
      if (error) {
        console.log("error =>", error);
      } else {
        setPokemon(data);
      }
    };
    fetchData();
  }, []);

  const [myPokeMons, setMyPokeMons] = useState([]);
  const addInMyPoke = (pokemon) => {
    if (myPokeMons.length < 6) {
      setMyPokeMons([...myPokeMons, pokemon]);
    } else {
      alert(`포켓몬은 6마리까지만 추가할 수 있습니다.`);
      return;
    }
    console.log("myPokeMons =>", myPokeMons);
  };

  return (
    <>
      <Dashboard myPokeMons={myPokeMons} />
      <PokemonList pokemonList={pokemon} addInMyPoke={addInMyPoke} />
    </>
  );
};

export default Dex;
