import { useLocation, useNavigate } from "react-router-dom";
import { CardBtn } from "../components/PokemonCard";
import styled from "styled-components";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //✅ 1. useLocation으로 현재 위치를 변수에 할당하고 / const location = useLocation()
  //✅ 2. location의 쿼리스트링을 파싱 / const queryParams = new URLSearchParams(location.search)
  //✅ 3. 파싱한 데이터에서 필요한 데이터값을 추출 / const id = queryParams.get("id")
  //🚫 (선택사항) 쿼리 숨기기 (window.history.replaceState({},null, location.pathname) 🚫새로고침 이슈발생
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const img = queryParams.get("img");
  const desc = queryParams.get("desc");
  const types = queryParams.get("types");
  // window.history.replaceState({}, null, location.pathname);

  return (
    <StDiv>
      <p>{name}</p>
      <img src={img} />
      <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
      <p>{types}</p>
      <p>{desc}</p>
      <CardBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </CardBtn>
    </StDiv>
  );
};

export default Details;

const StDiv = styled.div`
  color: black;

  p {
    margin: 18px;
  }
  button {
    margin: 12px;
  }
`;
