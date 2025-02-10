import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardBtn } from "../components/PokemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/pokemonContext";

const Details = () => {
  //콘텍스트 호출
  const { addInMyPoke } = useContext(PokemonContext);
  //쿼리 파라미터 불러오기
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // 변수에 쿼리 파라미터 할당
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const img = queryParams.get("img");
  const desc = queryParams.get("desc");
  const types = queryParams.get("types");
  // 포켓몬 추가 기능용 스테이트 설정
  const { pokemon } = location.state || {};
  // window.history.replaceState({}, null, location.pathname); url 주소의 쿼리 숨기기 - 새로고침 시 오류 발생되어 취소

  return (
    <StDiv>
      <p>{name}</p>
      <img src={img} />
      <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
      <p>{types}</p>
      <p>{desc}</p>
      {/* 덱스페이지로 돌아가기 */}
      <CardBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </CardBtn>
      <CardBtn onClick={() => addInMyPoke(pokemon)}>추가하기</CardBtn>
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
