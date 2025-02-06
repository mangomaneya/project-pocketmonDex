import styled from "styled-components";
import StButton from "../style/StButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInMyPoke, getOutMyPoke } from "../redux/pokemonSlice";
// import { toast } from "react-toastify";

const PokemonCard = ({ pokemon, btnName }) => {
  const dispatch = useDispatch();

  //prop으로 받은 포켓몬 구조분해할당
  const { id, korean_name, img_url, description } = pokemon;
  //디테일페이지 이동 구현
  const navigate = useNavigate();
  const navigateToDetail = (e) => {
    //클릭한 타겟이 버튼이면 처리되지 않도록 예외처리
    if (e.target.tagName === "BUTTON") {
      e.stopPropagation(); //이벤트가 부모요소로 전달되지 않도록 차단
      return;
    }
    navigate(`/details/pokemon?id=${id}`);
  };

  return (
    <>
      <PokeCard key={id} onClick={(event) => navigateToDetail(event)} id={id}>
        <p>{korean_name}</p>
        <img src={img_url}></img>
        <p>{id < 10 ? `No.00${id}` : id < 100 ? `No.0${id}` : `N.${id}`}</p>
        <p className="hide">{description}</p>
        {/* 버튼명에 따라 온클릭 이벤트 구분 */}
        {btnName === "추가" ? (
          <CardBtn onClick={() => dispatch(addInMyPoke(pokemon))}>
            {btnName}
          </CardBtn>
        ) : (
          <CardBtn onClick={() => dispatch(getOutMyPoke(pokemon))} $checked>
            {btnName}
          </CardBtn>
        )}
      </PokeCard>
    </>
  );
};

export default PokemonCard;

export const PokeCard = styled.div`
  color: black;
  background-color: #ffffff;
  /* border : 1px solid black; */
  border-radius: 8px;
  width: 160px;
  height: auto;
  padding: 22px 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  transition: all ease-in-out 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  }
  .hide {
    display: none;
  }
`;
export const CardBtn = styled(StButton)`
  
  width: fit-content;
  padding: 10px 18px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  
  color: #ffffff;
`;
