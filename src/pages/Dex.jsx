import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <>
      <PokemonLogo>
        <img
          src="/src/assets/pokemon-logo.png"
          alt="Pokemon Logo"
          className="pokemon-logo"
        />
      </PokemonLogo>
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
const PokemonLogo = styled.div`
  
  img{ width:160px;
  }
`;
