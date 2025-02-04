import styled from "styled-components";
import { CardBtn, PokeCard } from "./PokemonCard";
import { useMemo } from "react";

const BallBox = styled.div`
  padding: 24px;
  margin: 36px auto 24px auto;
  border: 2px dashed #c8c8c8;
  border-radius: 12px;
  background-color: white;
  width: 100px;

  img {
    width: 88px;
    height: 88px;
  }
`;
const FlexRowDiv = styled.section`
  display: flex;
`;
const MyPokemon = ({ myPokeMons }) => {
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
          return ball === null ? (
            <BallBox key={crypto.randomUUID()}>
              <img src="/src/assets/pokeball.png" alt="pokemon ball" />
            </BallBox>
          ) : (
            <PokeCard key={ball.id}>
              <p>{ball.korean_name}</p>
              <img src={ball.img_url}></img>
              <p>{ball.description}</p>
              <CardBtn>삭제</CardBtn>
            </PokeCard>
          );
        })
      }
    </FlexRowDiv>
  );
};

export default MyPokemon;
