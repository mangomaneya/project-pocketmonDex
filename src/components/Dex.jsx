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
    console.log(
      `포켓몬 리스트를 불러왔고 최초에만 렌더링 됩니다. 이 이후에는 렌더링 되지 않음`
    );
  }, []);

  const [myPokeMons, setMyPokeMons] = useState([]);
  const addInMyPoke = (pokemon) => {
    const isContain = myPokeMons.some((myPokemon) => {
      return myPokemon.id === pokemon.id;
    });
    if (myPokeMons.length >= 6) {
      alert(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
      return;
    }
    if (isContain) {
      alert(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
      return;
    }
    // console.log("myPokeMons in Dex =>", myPokeMons);
    setMyPokeMons([...myPokeMons, pokemon]);
    // console.log(isContain);
  };

  const getOutMyPoke = (pokemon) => {
    // const inMyPokeIds = myPokeMons.map((pokemon)=> pokemon.id)
    const removedMyPokemons = myPokeMons.filter((myPokemon) => {
      if (myPokemon.id !== pokemon.id) {
        return pokemon;
      }
    });
    setMyPokeMons(removedMyPokemons);
  };

  return (
    <>
      <Dashboard myPokeMons={myPokeMons} getOutMyPoke={getOutMyPoke} />
      <PokemonList pokemonList={pokemon} addInMyPoke={addInMyPoke} />
    </>
  );
};

export default Dex;
