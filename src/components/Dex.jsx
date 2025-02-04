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

  const [myPokeList, setMyPokeList] = useState([]);
  const addInMyPoke = (pokemon) => {
    if (myPokeList.length < 6) {
      setMyPokeList([...myPokeList, pokemon]);
      console.log("myPokeList =>", myPokeList);
    } else {
      alert(`포켓몬은 6마리까지만 추가할 수 있습니다.`);
      console.log("myPokeList =>", myPokeList);
      return;
    }

    myPokemonOfSix();
  };

  const myPokemonOfSix = () => {
    // 길이가 6개인 배열을 만든다(null)
    const ballOfSix = new Array(6).fill(null);
    // mypokelist에 항목을 하나씩 ballofsix에 넣는다. 동시에 ballofsix의 항목 하나를 지운다.
    if (myPokeList) {
      for (const pokemon of myPokeList) {
        // console.log("pokemon", pokemon);
        ballOfSix.unshift(pokemon);
        ballOfSix.length -= 1;
        // const myPokeBall = ballOfSix.slice(0, -1);// 왜안됨?
        console.log("ballOfSix", ballOfSix);
      }
    }
    //ballofsix의 항목이 null이면 포켓볼을 렌더링 하고
    //ballofsix의 항목이 obj이면 카드를 렌더링한다.
  };

  return (
    <>
      <Dashboard myPokeList={myPokeList} />
      <PokemonList pokemonList={pokemon} addInMyPoke={addInMyPoke} />
    </>
  );
};

export default Dex;
