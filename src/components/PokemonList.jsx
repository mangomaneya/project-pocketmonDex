import styled from "styled-components";
import PokemonCard from "./PokemonCard";

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

const PokemonList = ({ pokemonList, addInMyPoke }) => {
  return (
    <ListContainer>
      <PokemonCard
        pokemonList={pokemonList}
        addInMyPoke={addInMyPoke}
      ></PokemonCard>
    </ListContainer>
  );
};

export default PokemonList;
