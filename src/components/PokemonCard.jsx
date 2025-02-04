import styled from "styled-components";

const PokeCard = styled.div`
  color: black;
  background-color: #ffffff;
  /* border : 1px solid black; */
  border-radius: 8px;
  width: 160px;
  height: 240px;
  padding: 22px 12px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
`

const PokemonCard = ({ pokemonList }) => {
  return (
    <>
      {pokemonList.map((pokemon) => {
        const { id, korean_name, img_url, description } = pokemon;
        return (
          <PokeCard key={id}>
            <p>{korean_name}</p>
            <img src={img_url}></img>
            <p>{description}</p>
          </PokeCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
