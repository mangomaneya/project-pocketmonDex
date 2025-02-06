import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../constant/constant";

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
