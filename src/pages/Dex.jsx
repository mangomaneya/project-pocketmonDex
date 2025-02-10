import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { NUMBER_SIX } from "../constant/constant";

const Dex = () => {
  const [myPokeMons, setMyPokeMons] = useState(
    JSON.parse(localStorage.getItem("myPokemons")) || []
  );
  useEffect(() => {
    localStorage.setItem("myPokemons", JSON.stringify(myPokeMons));
  }, [myPokeMons]);

  const addInMyPoke = (pokemon) => {
    const isContain = myPokeMons.some((myPokemon) => {
      return myPokemon.id === pokemon.id;
    });
    if (myPokeMons.length >= NUMBER_SIX) {
      alert(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
      return;
    }
    if (isContain) {
      alert(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
      return;
    }
    setMyPokeMons((prev) => [...prev, pokemon]);
    console.log("myPokeMons", myPokeMons);
  };

  const getOutMyPoke = (pokemon) => {
    const removedMyPokeMons = myPokeMons.filter((myPokemon) => {
      if (myPokemon.id !== pokemon.id) {
        return pokemon;
      }
    });
    setMyPokeMons(removedMyPokeMons);
    console.log("myPokeMons", myPokeMons);
  };

  return (
    <>
      <Dashboard myPokeMons={myPokeMons} getOutMyPoke={getOutMyPoke} />
      <PokemonList addInMyPoke={addInMyPoke} />
    </>
  );
}; 

export default Dex;
