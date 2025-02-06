import styled from "styled-components";
import StButton from "../style/StButton";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <h1>
        4<img src="/src/assets/pokeball.png"></img>4
      </h1>
      <p>
        Sorry
        <br />
        This is Wrong Way
      </p>
      <StButton onClick={() => navigate("/")}>태초마을로 돌아가기</StButton>
    </StyledPage>
  );
};

export default NotFoundPage;

const StyledPage = styled.div`
  font-size: 3em;
  color: #222222;
  font-weight: bold;
  line-height: 1.4em;
  h1 {
    font-size: 7em;
    color: rgb(255, 0, 0);
  }
  img {
    width: 240px;
  }
  p {
    margin-top: 36px;
  }
`;
