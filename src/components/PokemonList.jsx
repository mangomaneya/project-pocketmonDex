import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constant/constant";
import { DexContainer } from "./Dashboard";

const PokemonList = () => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            btnName="추가"
          ></PokemonCard>
        );
      })}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled(DexContainer)`
  
  display: flex;
  flex-wrap: wrap;
  gap: 24px 0;
`;
