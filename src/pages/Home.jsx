import { Link } from "react-router-dom";
import StButton from "../style/StButton";
import StContainer from "../style/StContainer";

const Home = () => {

  return (
    <StContainer>
      <img
        src="/src/assets/pokemon-logo.png"
        alt="Pokemon Logo"
        className="pokemon-logo"
      />
      <Link to={"/dex"}>
        <StButton>포켓몬 도감 시작하기</StButton>
      </Link>
    </StContainer>
  );
};

export default Home;
