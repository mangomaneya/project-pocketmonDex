import { useLocation, useNavigate } from "react-router-dom";
import { CardBtn } from "../components/PokemonCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addInMyPoke, getOutMyPoke } from "../redux/pokemonSlice";
import { useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  //쿼리 파라미터 불러오기
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // 변수에 쿼리 파라미터 할당
  const id = queryParams.get("id");
  const { pokemon } = location.state || {};
  const { korean_name, img_url, description, types } = pokemon;
  //해당페이지 포켓몬이 마이포켓몬에 포함되어있는지 체크
  const myPokemons = useSelector((state) => state.myPokemonList.myPokemons);
  // console.log('myPokemons', myPokemons)
  const isContain = myPokemons.some((pokemons) => {
    return pokemons.id === pokemon.id;
  });
  console.log("isContain", isContain);
  return (
    <StDiv>
      <p>{korean_name}</p>
      <img src={img_url} />
      <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.0${id}`}</p>
      <p>{types}</p>
      <p>{description}</p>
      {/* 덱스페이지로 돌아가기 */}
      <CardBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </CardBtn>
      {isContain ? (
        <CardBtn onClick={() => dispatch(getOutMyPoke(pokemon))}>
          삭제하기
        </CardBtn>
      ) : (
        <CardBtn onClick={() => dispatch(addInMyPoke(pokemon))}>
          추가하기
        </CardBtn>
      )}
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
