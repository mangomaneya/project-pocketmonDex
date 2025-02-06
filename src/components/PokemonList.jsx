import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";

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

const ListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px 10px;
  margin: 24px 0;
  position: relative;
  width: 100%;
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px 0;
`;
