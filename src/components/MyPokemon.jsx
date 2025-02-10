import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useMemo, useContext } from "react";
import { NUMBER_SIX } from "../constant/constant";
import { PokemonContext } from "../context/pokemonContext";


const MyPokemon = () => {
  //마이포켓몬 콘텍스트 호출
  const { myPokeMons } = useContext(PokemonContext);
  
  //대시보드에 포켓볼 6개에 마이포켓몬을 담을 수 있게 동작 
  //마이포켓몬에 포켓몬이 추가 될 때마다 길이가 6인 배열에 추가됨
  const ballOfSix = useMemo(() => { // 함수 메모이제이션
    const tempBall = new Array(NUMBER_SIX).fill(null);  //빈배열 6개 생성 
    myPokeMons.forEach((pokemon, index) => {
      tempBall[index] = pokemon; // 앞에서부터 채우기
    });
    return tempBall;
  }, [myPokeMons]); // myPokeMons가 변경될 때만 다시 계산

  return (
    <FlexRowDiv>
      {
        //ballOfSix 항목이 null이면 포켓볼을 렌더링 하고
        //ballOfSix 항목이 null이 아니면 포켓몬 카드를 렌더링한다.
        ballOfSix.map((ball, index) => {
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
        })
      }
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
  margin-top: 36px;
`;