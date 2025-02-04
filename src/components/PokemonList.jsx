import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px 10px;
  margin-bottom: 24px;
  position: relative;
  width: 100%;
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px 0;
`;

const PokemonList = ({ pokemonList }) => {
  return (
    <ListContainer>
      <PokemonCard pokemonList={pokemonList}></PokemonCard>
    </ListContainer>
  );
};

export default PokemonList;
