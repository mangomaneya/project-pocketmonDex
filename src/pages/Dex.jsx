import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Dex = () => {
  const { myPokeMons } = useContext(PokemonContext);
  console.log("myPokeMons", myPokeMons);
  //마이포켓몬 상태 변경 시 로컬스토리지에 마이포켓몬 setItem
  useEffect(() => {
    localStorage.setItem("myPokemons", JSON.stringify(myPokeMons));
  }, [myPokeMons]);

  return (
    <>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
