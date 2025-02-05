import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";

const ListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px 10px;
  margin: 24px 0;
  position: relative;
  width: 100%;
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px 0;
`;

const PokemonList = ({ addInMyPoke }) => {
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
  return (
    <ListContainer>
      {allPokemon.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addInMyPoke={addInMyPoke}
            btnName="추가"
          ></PokemonCard>
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;
