import styled from "styled-components";

const BallBox = styled.div`
  padding: 24px;
  margin: 36px auto;
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
const MyPokemon = () => {
  return (
    <FlexRowDiv>
      <BallBox>
        <img src="/src/assets/pokeball.png" alt="pokemon ball" />
      </BallBox>
      <BallBox>
        <img src="/src/assets/pokeball.png" alt="pokemon ball" />
      </BallBox>
      <BallBox>
        <img src="/src/assets/pokeball.png" alt="pokemon ball" />
      </BallBox>
    </FlexRowDiv>
  );
};

export default MyPokemon;
