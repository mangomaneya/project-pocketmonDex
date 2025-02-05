import { useNavigate } from "react-router-dom";
import StButton from "../style/StButton";
import StContainer from "../style/StContainer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StContainer>
      <img
        src="/src/assets/pokemon-logo.png"
        alt="Pokemon Logo"
        className="pokemon-logo"
      />
      <StButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StButton>
    </StContainer>
  );
};

export default Home;
