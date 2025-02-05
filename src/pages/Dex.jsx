import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import supabase from "../../supabaseClient";

const Dex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("POKEMON_MOCKDATA")
        .select("*");
      if (error) {
        console.log("error =>", error);
      } else {
        setAllPokemon(data);
      }
    };
    fetchData();
    console.log(
      `포켓몬 리스트를 불러왔고 최초에만 렌더링 됩니다. 이 이후에는 렌더링 되지 않음`
    );
  }, []);
  // console.log(JSON.parse(localStorage.getItem("myPokemons")));
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
    if (myPokeMons.length >= 6) {
      alert(`포켓몬은 최대 6마리만 선택할 수 있습니다.`);
      return;
    }
    if (isContain) {
      alert(`이미 선택된 포켓몬은 추가 할 수 없습니다.`);
      return;
    }
    // console.log("myPokeMons in Dex =>", myPokeMons);
    setMyPokeMons((prev) => [...prev, pokemon]);
    // console.log(isContain);
  };

  const getOutMyPoke = (pokemon) => {
    // const inMyPokeIds = myPokeMons.map((pokemon)=> pokemon.id)
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
      <PokemonList allPokemon={allPokemon} addInMyPoke={addInMyPoke} />
    </>
  );
};

export default Dex;
