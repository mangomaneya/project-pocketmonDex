import styled from "styled-components";
import MyPokemon from "./MyPokemon";

const Dashboard = () => {
  return (
    <DexContainer>
      <Title>나만의 포켓몬</Title>
      <MyPokemon></MyPokemon>
    </DexContainer>
  );
};

export default Dashboard;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 900;
  text-align: center;
  color: rgb(35,35,35);
`;
export const DexContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px 10px;
  margin: 24px 0;
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(128, 128, 128, 0.4);
  background-image: url("https://pokemonkorea.co.kr/img/bg_pattern.jpg");
  background-repeat: repeat;
`;
