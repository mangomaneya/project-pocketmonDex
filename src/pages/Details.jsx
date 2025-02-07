import { useLocation, useNavigate } from "react-router-dom";
import { CardBtn } from "../components/PokemonCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addInMyPoke, getOutMyPoke } from "../redux/pokemonSlice";
import MOCK_DATA from "../constant/constant";

const Details = () => {
  const dispatch = useDispatch();
  //쿼리 파라미터 불러오기
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // 변수에 쿼리 파라미터 할당
  const id = Number(queryParams.get("id"));

  const pokemon = MOCK_DATA.find((data) => {
    if (data.id === id) {
      return data;
    }
  });
  // console.log("pokemon", pokemon);
  const { korean_name, img_url, description, types } = pokemon;

  //해당페이지 포켓몬이 마이포켓몬에 포함되어있는지 체크
  const myPokemons = useSelector((state) => state.myPokemonList.myPokemons);
  // console.log('myPokemons', myPokemons)
  const isContain = myPokemons.some((pokemons) => {
    return pokemons.id === pokemon.id;
  });

  return (
    <StDiv>
      <h1>{korean_name}</h1>
      <img src={img_url} />
      <div className="id-container">
        <p
          className="before"
          onClick={() => navigate(`/details/pokemon?id=${pokemon.id - 1}`)}
        >
          {" "}
          &#8592;
          {id < 10
            ? `No.00${id - 1}`
            : id < 100
            ? `No.0${id - 1}`
            : `N.${id - 1}`}
        </p>
        <p className="present">
          {id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.${id}`}
        </p>
        <p
          className="after"
          onClick={() => navigate(`/details/pokemon?id=${pokemon.id + 1}`)}
        >
          {id < 10
            ? `No.00${id + 1}`
            : id < 100
            ? `No.0${id + 1}`
            : `N.${id + 1}`}
          &#8594;
        </p>
      </div>
      <p>
        {types
          .map((type) => {
            return type;
          })
          .join(", ")}
      </p>
      <p>{description}</p>
      <div>
        <CardBtn
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로가기
        </CardBtn>
        {isContain ? (
          <CardBtn onClick={() => dispatch(getOutMyPoke(pokemon))} $checked>
            삭제하기
          </CardBtn>
        ) : (
          <CardBtn onClick={() => dispatch(addInMyPoke(pokemon))}>
            추가하기
          </CardBtn>
        )}
      </div>
      <StyledRound>
        {myPokemons.map((pokemon) => {
          return (
            <div className="ball" key={pokemon.id}>
              {/* {pokemon.korean_name} */}
              <img
                src={pokemon.img_url}
                onClick={() => navigate(`/details/pokemon?id=${pokemon.id}`)}
              ></img>
            </div>
          );
        })}
      </StyledRound>
    </StDiv>
  );
};

export default Details;

const StDiv = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: url("https://pokemonkorea.co.kr/img/bg_pattern.jpg");
  background-repeat: repeat;
  border-radius: 12px;
  padding: 48px 0;
  transition: all ease-in-out 0.2s;

  h1 {
    font-size: 2em;
    margin-bottom: 24px;
  }
  p {
    margin: 18px;
    font-weight: bold;
    font-size: 1.2em;
  }
  button {
    margin: 12px;
  }
  img {
    width: 180px;
  }
  .id-container {
    display: flex;
    gap: 100px;
    align-items: flex-end;
  }
  .present {
    font-size: 1.5em;
  }
  .before,
  .after {
    color: #b9b9b9;
    cursor: pointer;

    &:hover {
      transform: translateY(-1.5px);
      text-decoration: underline 2px;
    }
  }
  @media (max-width: 1742px) {
    margin-top: 32px;
  }
  @media (max-width: 740px) {
    .id-container {
      gap: 24px;
    }
  }
`;
const StyledRound = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
  .ball {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/src/assets/pokeball.png");
    background-size: contain;
    /* opacity: 0.5; */
  }
  img {
    transition: all ease-in-out 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.5);
    }
  }
`;
