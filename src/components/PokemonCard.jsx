import styled from "styled-components";
import StButton from "../style/StButton";

const PokeCard = styled.div`
  color: black;
  background-color: #ffffff;
  /* border : 1px solid black; */
  border-radius: 8px;
  width: 160px;
  height: auto;
  padding: 22px 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const CardBtn = styled(StButton)`
  width: fit-content;
  padding: 10px 18px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: #ffffff;
`;

const PokemonCard = ({ pokemonList, addInMyPoke }) => {
  // console.log("addInMyPoke =>", addInMyPoke);
  const addHandler = (pokemon) => {
    addInMyPoke(pokemon);
  };

  return (
    <>
      {pokemonList.map((pokemon) => {
        const { id, korean_name, img_url, description } = pokemon;
        return (
          <PokeCard key={id}>
            <p>{korean_name}</p>
            <img src={img_url}></img>
            <p>{description}</p>
            <CardBtn onClick={()=>addHandler(pokemon)}>추가</CardBtn>
          </PokeCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
