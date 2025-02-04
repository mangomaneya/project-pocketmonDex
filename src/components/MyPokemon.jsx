import styled from "styled-components";
import { CardBtn, PokeCard } from "./PokemonCard";

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
  // 길이가 6개인 배열을 만든다(null)
  const ballOfSix = new Array(6).fill(null);
  // myPokeMons에 항목을 하나씩 ballOfSix에 넣는다. 동시에 ballOfSix의 항목 하나를 지운다.
  if (myPokeMons) {
    for (const pokemon of myPokeMons) {
      // console.log("pokemon", pokemon);
      ballOfSix.unshift(pokemon);
      ballOfSix.length -= 1;
      // const myPokeBall = ballOfSix.slice(0, -1);// 왜안됨?
    }
  }

  return (
    <FlexRowDiv>
      {
        //ballOfSix 항목이 null이면 포켓볼을 렌더링 하고
        //ballOfSix 항목이 null이 아니면 카드를 렌더링한다.
        ballOfSix.map((ball) => {
          console.log("myPokeBalls.length =>", ballOfSix.length);
          return ball === null ? (
            <BallBox>
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
