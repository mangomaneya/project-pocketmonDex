import styled from "styled-components";
import MyPokemon from "./MyPokemon";

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  color: red;
`;
const DexContainer = styled.div`
  background-color: #f9f9f9;
  padding: 24px 10px;
  margin: 24px 0;
  position: relative;
  width: 100%;
  border-radius: 8px;

`;
const Dashboard = ({ myPokeMons, getOutMyPoke }) => {
  return (
    <DexContainer>
      <Title>나만의 포켓몬</Title>
      <MyPokemon
        myPokeMons={myPokeMons}
        getOutMyPoke={getOutMyPoke}
      ></MyPokemon>
    </DexContainer>
  );
};

export default Dashboard;
