import styled from "styled-components";
import PokemonCard from "./PokemonCard";
// import { useMemo } from "react";
import { NUMBER_SIX } from "../constant/constant";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const MyPokemon = () => {
  const myPokeMons = useSelector((state) => {
    return state.myPokemonList.myPokemons;
  });

  // 6개의 포켓볼을 만든다,
  // 6개의 포켓볼은 마이포켓몬의 길이가 늘어날 때 마다, 1개씩 줄어든다.

  const ballOfSix = useMemo(() => {
    const tempBall = new Array(NUMBER_SIX).fill(null); //빈배열 6개 생성
    tempBall.length -= myPokeMons.length;
    return tempBall;
  }, [myPokeMons]);

  return (
    <FlexRowDiv>
      {myPokeMons.map((pokemons) => {
        return (
          <PokemonCard
            key={pokemons.id + pokemons.korean_name}
            pokemon={pokemons}
            btnName="삭제"
          />
        );
      })}
      {ballOfSix.map((ball, index) => {
        return (
          <BallBox key={index}>
            <img src="/src/assets/pokeball.png" alt="pokemon ball" />
          </BallBox>
        );
      })}
    </FlexRowDiv>
  );
};

export default MyPokemon;

const BallBox = styled.div`
  padding: 24px;
  margin: 36px auto 24px auto;
  border: 2px dashed #c8c8c8;
  border-radius: 12px;
  background-color: white;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  img {
    width: 88px;
    height: 88px;
  }
`;
const FlexRowDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 0;
  margin-top: 36px;
`;
