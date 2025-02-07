import { useDispatch } from "react-redux";
import MOCK_DATA, { MAX_POKEID, MIN_POKEID } from "../constant/constant";
import { findRandomPoke, resetRandoms } from "../redux/pokemonSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StyledPage } from "./NotFoundPage";
import { StyledRound } from "./Details";
import { useNavigate } from "react-router-dom";

const NoPokemon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const randomPokemons = useSelector(
    (state) => state.myPokemons.randomPokemons
  );

  const numberOfRandoms = 3; //랜덤으로 선택할 포켓몬 수

  useEffect(() => {
    dispatch(resetRandoms());
    const tempArray = new Array(numberOfRandoms).fill(null).map(() => {
      return Math.floor(
        Math.random() * (MAX_POKEID - MIN_POKEID + 1) + MIN_POKEID
      ); //1부터 151까지의 랜덤한 정수 변수
    });

    tempArray.forEach((id) => {
      dispatch(findRandomPoke(id));
    });
  }, [dispatch]);
  console.log("randomPokemons", randomPokemons);
  return (
    // 오박사 이미지 가져오기
    // 바깥은 혼자 돌아다니기 위험하단다!
    // 이 아이들 중에 하나를 데려가렴.
    // 랜덤포켓몬 3마리

    // 1~151 사이의 랜덤한 숫자를 3개 고르는 함수
    // 그 숫자로 포켓몬 조회
    // 포켓몬은 클릭하면 상세페이지로 이동

    // 포켓몬 조회하는 함수를 redux로...
    // 초기값은 빈 배열
    // 액션 페이로드로 아이디값을 받아서 조회하고, 배열에 넣어준다.
    //
    <StNoPokemonDiv>
      <img id="doctorOhImg" src="/src/assets/doctor_oh.jpg" alt="oh박사" />

      <StyledPage>
        <p>
          바깥은 혼자 돌아다니기 위험하단다!
          <br />이 아이들 중에 하나를 데려가렴.{" "}
        </p>
      </StyledPage>
      <StyledRound>
        {randomPokemons.map((pokemon) => {
          return (
            <div className="ball" key={pokemon.id}>
              <img
                src={pokemon.img_url}
                onClick={() => navigate(`/details/pokemon?id=${pokemon.id}`)}
              ></img>
            </div>
          );
        })}
      </StyledRound>
    </StNoPokemonDiv>
  );
};

export default NoPokemon;
const StNoPokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #doctorOhImg {
    width: 50%;
    min-width: 420px;
  }
`;
