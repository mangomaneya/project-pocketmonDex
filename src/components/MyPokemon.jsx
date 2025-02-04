import styled from "styled-components";

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
const MyPokemon = ({ myPokeList }) => {

  return (
    <FlexRowDiv>
      {/* {myPokeList.length === 0
        ? ballOfSix.map((index) => {
            return <BallBox key={ballOfSix[index]}>포케볼</BallBox>;
          })
        : myPokeList.map((pokemon) => {
            return <BallBox key={pokemon.id}>pokemon</BallBox>;
          })} */}
      <BallBox>
        <img src="/src/assets/pokeball.png" alt="pokemon ball" />
      </BallBox>
    </FlexRowDiv>
  );
};

export default MyPokemon;
