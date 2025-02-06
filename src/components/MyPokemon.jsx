import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useMemo } from "react";
import { NUMBER_SIX } from "../constant/constant";
import { useSelector } from "react-redux";

const MyPokemon = () => {
  const myPokeMons = useSelector((state) => {
    console.log("state", state.myPokemonList.myPokemons);
    return state.myPokemonList.myPokemons || [];
  });
  console.log("myPokeMons", myPokeMons);

  const ballOfSix = useMemo(() => {
    // 함수 메모이제이션
    const tempBall = new Array(NUMBER_SIX).fill(null); //빈배열 6개 생성
    myPokeMons.forEach((pokemon, index) => {
      tempBall[index] = pokemon; // 앞에서부터 채우기
    });
    return tempBall;
  }, [myPokeMons]); // myPokeMons가 변경될 때만 다시 계산

  return (
    <FlexRowDiv>
      {ballOfSix.map((ball, index) => {
        if (ball === null) {
          return (
            <BallBox key={index}>
              <img src="/src/assets/pokeball.png" alt="pokemon ball" />
            </BallBox>
          );
        }
        return (
          <PokemonCard
            key={ball.id + ball.korean_name}
            pokemon={ball}
            btnName="삭제"
          />
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
const FlexRowDiv = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 36px;
`;
