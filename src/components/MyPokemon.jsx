import styled from "styled-components";
import PokemonCard, { CardBtn, PokeCard } from "./PokemonCard";
import { useMemo } from "react";

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
  margin-top: 36px;
`;
const MyPokemon = ({ myPokeMons, getOutMyPoke }) => {
  // gpt 도움 받음
  // useMemo를 사용하여 ballOfSix 배열을 캐싱
  const ballOfSix = useMemo(() => {
    const tempBall = new Array(6).fill(null); // 6개 슬롯 초기화
    myPokeMons.forEach((pokemon, index) => {
      tempBall[index] = pokemon; // 앞에서부터 채우기
    });
    return tempBall;
  }, [myPokeMons]); // myPokeMons가 변경될 때만 다시 계산

  return (
    <FlexRowDiv>
      {
        //ballOfSix 항목이 null이면 포켓볼을 렌더링 하고
        //ballOfSix 항목이 null이 아니면 카드를 렌더링한다.
        ballOfSix.map((ball) => {
          if (ball === null) {
            return (
              <BallBox key={crypto.randomUUID()}>
                <img src="/src/assets/pokeball.png" alt="pokemon ball" />
              </BallBox>
            );
          }
          return (
            <PokemonCard
              key={ball.id}
              pokemon={ball}
              getOutMyPoke={getOutMyPoke}
              btnName="삭제"
            />
          );
        })
      }
    </FlexRowDiv>
  );
};

export default MyPokemon;
